import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import Ajv from 'ajv';
import { parse } from 'parse5';
import less from 'less';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const read = path => readFile(resolve(root, path), 'utf8');
export function walk(node, visit) {
    visit(node);
    for (const child of node.childNodes ?? []) walk(child, visit);
}
export const attrs = node => Object.fromEntries((node.attrs ?? []).map(a => [a.name, a.value]));
export function text(node) {
    return node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
}
export function htmlRows(html) {
    const rows = [];
    let group;
    walk(parse(html, { sourceCodeLocationInfo: true }), node => {
        if (node.tagName === 'h4') group = text(node).trim();
        const a = attrs(node);
        if (node.tagName === 'div' && a.class === 'icon') {
            const label = node.childNodes.find(child => attrs(child).class === 'name');
            const display = (label?.childNodes ?? []).filter(child => !['i', 'em'].includes(child.tagName)).map(text).join('').trim();
            rows.push({ ...a, display, group, line: node.sourceCodeLocation.startLine });
        }
        if (node.tagName === 'span' && a.class === 'utf') {
            const icon = node.childNodes.find(child => child.tagName === 'i');
            const code = node.childNodes.find(child => child.tagName === 'code');
            const label = node.childNodes.filter(child => child.nodeName === '#text').map(text).join('').trim();
            const characters = [...text(icon ?? {})];
            if (characters.length !== 1) throw new Error(`Invalid cheatsheet character: ${label}`);
            const entity = text(code ?? {}).match(/^&#x([a-f\d]+);$/i);
            if (!entity) throw new Error(`Invalid cheatsheet entity: ${label}`);
            rows.push({ label, glyph: characters[0].codePointAt(0).toString(16), entity: entity[1].toLowerCase(), group, line: node.sourceCodeLocation.startLine });
        }
    });
    return rows;
}
export function contentRules(css) {
    const rules = [];
    for (const [, selectors, declarations] of css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
        const match = declarations.match(/\bcontent:\s*["']\\([a-f\d]+)["']/i);
        if (match) rules.push({ selectors: selectors.split(',').map(s => s.trim()), glyph: match[1].toLowerCase() });
    }
    return rules;
}
export async function fontGlyphs() {
    const font = new Map();
    for (const match of (await read('fonts/keyrune.svg')).matchAll(/<glyph\b([^>]+)>/g)) {
        const hex = match[1].match(/unicode="&#x([a-f\d]+);"/i)?.[1];
        if (hex) font.set(hex.toLowerCase(), match[1].match(/glyph-name="([^"]+)"/)?.[1] ?? '');
    }
    return font;
}

export async function legacySources({ includeDocs = true, generatedFiles = {} } = {}) {
    const sources = {};
    const glyphs = generatedFiles['less/glyphs.less'] ?? await read('less/glyphs.less');
    for (const file of ['icons', 'duo', 'border']) {
        const source = generatedFiles[`less/${file}.less`] ?? await read(`less/${file}.less`);
        const { css } = await less.render(`@ss-prefix: ss;\n${glyphs}\n${source}`, { filename: resolve(root, `less/${file}.less`) });
        sources[file] = { source, rules: contentRules(css) };
    }
    const defaults = new Map();
    for (const rule of sources.icons.rules) {
        rule.codes = rule.selectors.map(selector => {
            const match = selector.match(/^\.ss-([\w-]+):before$/);
            if (!match) throw new Error(`Unexpected default selector: ${selector}`);
            return match[1];
        });
        for (const code of rule.codes) {
            if (defaults.has(code)) throw new Error(`Duplicate default selector: ${code}`);
            defaults.set(code, rule.glyph);
        }
    }
    const font = await fontGlyphs();
    return { ...sources, defaults, font, ...(includeDocs ? {
        iconsHtml: await read('docs/icons.html'), cheatsheetHtml: await read('docs/cheatsheet.html'),
    } : {}) };
}

export function resolvedGlyphs(entry, entries, seen = new Set()) {
    if (seen.has(entry.code)) throw new Error(`Circular symbolOf reference: ${entry.code}`);
    seen.add(entry.code);
    if (!entry.symbolOf) return entry.glyphs;
    const target = entries.find(other => other.code === entry.symbolOf);
    if (!target) throw new Error(`Unknown symbolOf reference: ${entry.symbolOf}`);
    return resolvedGlyphs(target, entries, seen);
}

export function validateCatalog(catalog, schema, legacy) {
    const ajv = new Ajv({ allErrors: true });
    const valid = ajv.compile(schema);
    if (!valid(catalog)) return valid.errors.map(error => `${error.instancePath || '/'} ${error.message}`);
    const errors = [];
    const groups = new Set();
    for (const group of catalog.groups) {
        if (groups.has(group.id)) errors.push(`Duplicate group: ${group.id}`);
        groups.add(group.id);
    }
    const codes = new Set();
    const mappings = new Map();
    const represented = new Set();
    const inventories = new Map();
    for (const entry of catalog.sets) {
        if (!groups.has(entry.group)) errors.push(`${entry.code}: unknown group ${entry.group}`);
        for (const code of [entry.code, ...(entry.aliases ?? [])]) {
            if (codes.has(code)) errors.push(`Duplicate code or alias: ${code}`);
            codes.add(code);
        }
        let glyphs;
        try { glyphs = resolvedGlyphs(entry, catalog.sets); } catch (error) { errors.push(error.message); continue; }
        for (const [role, hex] of Object.entries(glyphs)) {
            const cp = parseInt(hex, 16);
            if (cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) errors.push(`${entry.code}.${role}: invalid Unicode scalar ${hex}`);
            if (!legacy.font.has(hex)) errors.push(`${entry.code}.${role}: missing font glyph ${hex}`);
            represented.add(hex);
        }
        for (const code of [entry.code, ...(entry.aliases ?? [])]) {
            mappings.set(code, glyphs.default);
            inventories.set(code, new Set(Object.values(glyphs)));
        }
    }
    for (const entry of catalog.sets) {
        if (entry.added === null && (entry.docs?.icon !== false || !entry.notes)) {
            errors.push(`${entry.code}: unknown added version requires a hidden icon card and explanatory notes`);
        }
    }
    // When compiled sources are supplied, verify their mappings and manual layer rules.
    for (const [code, hex] of legacy.defaults ?? []) {
        if (mappings.get(code) !== hex) errors.push(`${code}: manifest default must match LESS ${hex}`);
    }
    for (const code of mappings.keys()) if (legacy.defaults && !legacy.defaults.has(code)) errors.push(`${code}: no existing LESS class`);
    for (const file of ['duo', 'border']) for (const rule of legacy[file]?.rules ?? []) {
        if (!represented.has(rule.glyph)) errors.push(`${file}: unrecorded layer glyph ${rule.glyph}`);
        for (const selector of rule.selectors) {
            for (const [, code] of selector.matchAll(/\.ss-([\w-]+)/g)) {
                if (legacy.defaults.has(code) && !inventories.get(code)?.has(rule.glyph)) {
                    errors.push(`${code}: missing ${file} glyph ${rule.glyph}`);
                }
            }
        }
    }
    return [...new Set(errors)];
}
