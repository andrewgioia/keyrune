import { mkdir, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { legacySources, htmlRows, read, validateCatalog } from './manifest.mjs';

const groupNames = [
    ['core', 'Core Sets'], ['expansion', 'Expansion Sets'], ['commander', 'Command Zone Sets'],
    ['reprint', 'Reprint Sets'], ['beginner', 'Beginner Sets'], ['duel', 'Duel Decks'],
    ['vault', 'From the Vault Sets'], ['premium', 'Premium Deck Series'],
    ['spellbook', 'Signature Spellbooks'], ['global', 'Global Series'], ['guild', 'Guild Kits'],
    ['supplemental', 'Other Supplemental Products'], ['promo', 'Promotional Sets'],
    ['digital', 'Digital Sets'], ['un', 'Un-Serious Sets'], ['unofficial', 'Unofficial Symbols'],
];
const sourceGroups = {
    Core: 'core', Expansions: 'expansion', 'Command Zone': 'commander', Reprint: 'reprint',
    Beginner: 'beginner', 'Duel Decks': 'duel', 'From the Vault': 'vault',
    'Premium Deck Series': 'premium', 'Signature Spellbook': 'spellbook',
    'Global Series': 'global', 'Guild Kits': 'guild', 'Other Supplemental Products': 'supplemental',
    Promotional: 'promo', 'Secret Lairs': 'promo', Digital: 'digital', 'Un-serious': 'un', Unofficial: 'unofficial',
};

export function importCatalog(legacy) {
    const issues = [];
    const record = (kind, code, source, observed, selected, reason) => {
        issues.push({ id: `${kind}:${code}:${issues.filter(i => i.kind === kind && i.code === code).length + 1}`, kind, code, source, observed, selected, reason });
    };
    const rows = htmlRows(legacy.iconsHtml);
    const cheats = htmlRows(legacy.cheatsheetHtml);
    const groups = groupNames.map(([id, name]) => ({ id, name }));
    const sets = rows.map(row => {
        const group = groups.find(group => group.name === row.group)?.id;
        if (!group || !legacy.defaults.has(row.id)) throw new Error(`Unrecognized docs entry: ${row.id}`);
        const name = row.name === row['data-name'] ? row.name : row.display || row.name;
        const entry = { code: row.id, name, group, added: row['data-added']?.replace(/^v/, '') ?? null,
            glyphs: { default: legacy.defaults.get(row.id) } };
        if (row.display && row.display !== name) entry.display = row.display;
        if (row['data-duo'] === 'true') entry.preview = { duo: true };
        if (row.name !== row['data-name'] || row['data-class'] !== row.id) {
            record('icon-metadata', row.id, `docs/icons.html:${row.line}`,
                { name: row.name, dataName: row['data-name'], dataClass: row['data-class'], visible: name },
                { name, code: row.id }, 'When metadata disagrees, preserve the rendered grid label and element ID; review alternate names before generation.');
        }
        if (row['data-unicode'] !== entry.glyphs.default) record('icon-codepoint', row.id, `docs/icons.html:${row.line}`,
            row['data-unicode'], entry.glyphs.default, 'The current LESS default controls the public class.');
        if (row.duo !== undefined) record('icon-attribute', row.id, `docs/icons.html:${row.line}`, { duo: row.duo },
            { duo: entry.preview?.duo ?? false }, 'Bare duo attribute is not read by the modal; preserve its current behavior.');
        return entry;
    });
    const byCode = new Map(sets.map(entry => [entry.code, entry]));
    // Maintainer-confirmed aliases whose LESS declarations are separate rules.
    for (const code of ['slu', 'psld']) {
        const owner = byCode.get('sld');
        if (!owner || legacy.defaults.get(code) !== owner.glyphs.default || byCode.has(code)) {
            throw new Error(`Cannot consolidate ${code} under sld; review its docs and default glyph.`);
        }
        (owner.aliases ??= []).push(code);
        byCode.set(code, owner);
        record('alias', code, 'maintainer decision', code, 'sld',
            'Confirmed alias of SLD; preserve its public class without a separate icon card.');
    }
    for (const rule of legacy.icons.rules) {
        const documented = rule.codes.filter(code => byCode.has(code));
        let owner = documented.length === 1 ? byCode.get(documented[0]) : null;
        for (const code of rule.codes) {
            if (byCode.has(code)) continue;
            // Grouped selectors are explicit aliases. Multiple documented products stay separate.
            if (!owner && documented.length > 1) {
                const fontName = legacy.font.get(rule.glyph);
                owner = byCode.get(documented.find(c => c === fontName) ?? documented[0]);
            }
            if (owner) {
                (owner.aliases ??= []).push(code);
                byCode.set(code, owner);
                record('alias', code, 'less/icons.less', rule.codes, owner.code, 'Grouped default selectors; this does not imply shared duo/border overrides.');
                continue;
            }
            const offset = legacy.icons.source.indexOf(`.@{ss-prefix}-${code}:before`);
            const before = legacy.icons.source.slice(0, offset);
            const heading = [...before.matchAll(/\/\*\*\s*\n\s*\*\s*([^*\n]+)\*\//g)].at(-1)?.[1].trim();
            const group = sourceGroups[heading];
            if (!group) throw new Error(`Unknown LESS group ${heading} for ${code}`);
            const comment = legacy.icons.source.slice(offset).match(/\}[^\n]*\/\/\s*([^\n]+)/)?.[1]?.trim();
            owner = { code, name: comment || code, group, added: null, glyphs: { default: rule.glyph },
                docs: { icon: false }, notes: 'Not listed in the existing icon reference. Name and first-added version need review.' };
            sets.push(owner);
            byCode.set(code, owner);
            record('undocumented-class', code, 'less/icons.less', { comment, heading, glyph: rule.glyph },
                { name: owner.name, added: null, icon: false }, 'Preserve the public class; do not invent an added version or silently add a docs card.');
        }
    }
    const addGlyph = (entry, role, hex, source) => {
        if (entry.glyphs[role] === hex) return;
        if (entry.glyphs[role]) {
            if (Object.values(entry.glyphs).includes(hex)) return;
            const alternate = `${role}-reference`;
            if (entry.glyphs[alternate] && entry.glyphs[alternate] !== hex) throw new Error(`Multiple conflicting ${entry.code}.${role} references`);
            record('layer-conflict', entry.code, source, { role, glyph: hex }, { [role]: entry.glyphs[role], [alternate]: hex },
                'Preserve runtime LESS and retain the conflicting reference glyph for review.');
            entry.glyphs[alternate] = hex;
        } else entry.glyphs[role] = hex;
    };
    const layerBindings = [];
    for (const file of ['duo', 'border']) for (const rule of legacy[file].rules) for (const selector of rule.selectors) {
        const codes = [...selector.matchAll(/\.ss-([\w-]+)/g)].map(m => m[1]).filter(code => byCode.has(code));
        if (codes.length !== 1) throw new Error(`Cannot identify layer owner: ${selector}`);
        const code = codes[0];
        const entry = byCode.get(code);
        const fontName = legacy.font.get(rule.glyph);
        const suffix = fontName?.match(/-(border|inner|white|color|rarity)$/)?.[1];
        const role = /::?marker$/.test(selector) ? 'border' : /::?before$/.test(selector) ? 'rarity'
            : suffix ? ({ white: 'inner', color: 'rarity' }[suffix] ?? suffix) : file === 'border' ? 'border' : 'inner';
        addGlyph(entry, role, rule.glyph, `less/${file}.less`);
        layerBindings.push({ file: `less/${file}.less`, selector, code, role, glyph: rule.glyph });
        if (fontName && !fontName.startsWith(`${entry.code}-`) && fontName !== entry.code && suffix) {
            record('layer-owner', entry.code, `less/${file}.less`, { glyph: rule.glyph, fontName }, role,
                'Exported glyph name belongs to another code; preserve the existing rule and review intent.');
        }
    }
    for (const row of cheats) {
        if (row.glyph !== row.entity) record('cheatsheet-label', row.label, `docs/cheatsheet.html:${row.line}`, { character: row.glyph, label: row.entity },
            legacy.defaults.get(row.label.replace(/^ss-/, '')) ?? row.glyph,
            'The copyable character and printed codepoint disagree; use the LESS default where available.');
        if (row.label.startsWith('ss-')) {
            const code = row.label.slice(3);
            if (!legacy.defaults.has(code)) throw new Error(`Unknown cheatsheet code ${code}`);
            if (row.glyph !== legacy.defaults.get(code)) record('cheatsheet-codepoint', code, `docs/cheatsheet.html:${row.line}`,
                row.glyph, legacy.defaults.get(code), 'Preserve the current LESS default.');
        } else {
            const [code, ...words] = row.label.split(/\s+/);
            if (!byCode.has(code)) throw new Error(`Unknown supplemental glyph label: ${row.label}`);
            const role = words.join('-').replace(/^white$/, 'inner').replace(/^color$/, 'rarity');
            const combined = `${code}-${role}`;
            if (legacy.defaults.get(combined) === row.glyph) {
                record('cheatsheet-variant', combined, `docs/cheatsheet.html:${row.line}`, row.label, `ss-${combined}`,
                    'This is a separate public symbol, already represented by its own catalog entry.');
            } else addGlyph(byCode.get(code), role, row.glyph, `docs/cheatsheet.html:${row.line}`);
        }
    }
    const listed = new Set(cheats.map(row => row.glyph));
    const uniqueDefaults = new Set();
    for (const entry of sets) {
        if (!listed.has(entry.glyphs.default) && !uniqueDefaults.has(entry.glyphs.default)) record('missing-cheatsheet', entry.code,
            'docs/cheatsheet.html', null, entry.glyphs.default, 'Public default glyph has no copyable entry.');
        uniqueDefaults.add(entry.glyphs.default);
        const binding = layerBindings.some(binding => binding.file === 'less/duo.less' && binding.code === entry.code);
        if ((entry.preview?.duo ?? false) !== binding) record('duo-preview', entry.code, 'docs/icons.html and less/duo.less',
            { preview: entry.preview?.duo ?? false, hasDuoRule: binding }, entry.preview?.duo ?? false,
            'Preserve current docs preview; review capability separately from the presence of extra glyphs.');
    }
    // Sharing is explicit and only applies to identical inventories, never merely equal defaults.
    const inventories = new Map();
    for (const entry of sets) {
        const key = JSON.stringify(Object.entries(entry.glyphs).sort(([a], [b]) => a.localeCompare(b)));
        if (!inventories.has(key)) inventories.set(key, []);
        inventories.get(key).push(entry);
    }
    for (const entries of inventories.values()) {
        const fontName = legacy.font.get(entries[0].glyphs.default);
        const primary = entries.find(entry => entry.code === fontName) ?? entries[0];
        for (const entry of entries) {
            if (entry === primary) continue;
            entry.symbolOf = primary.code;
            delete entry.glyphs;
            record('shared-symbol', entry.code, 'less/icons.less', entry.symbolOf, entry.symbolOf,
                'Keep distinct product metadata; share only the glyph inventory, not rendering rules. Prefer the exported glyph name as the owner.');
        }
    }
    // Within each category, retain the order of existing docs entries, then append unlisted classes.
    sets.sort((a, b) => groups.findIndex(g => g.id === a.group) - groups.findIndex(g => g.id === b.group));
    const catalog = { $schema: './sets.schema.json', schemaVersion: 1, groups, sets };
    const report = {
        phase: 1,
        policy: 'Candidate metadata preserves rendered docs labels; glyph assignments preserve current LESS. Findings are recorded for review before phase 2 changes outputs.',
        sourceHashes: Object.fromEntries([
            ['less/icons.less', legacy.icons.source], ['less/duo.less', legacy.duo.source], ['less/border.less', legacy.border.source],
            ['docs/icons.html', legacy.iconsHtml], ['docs/cheatsheet.html', legacy.cheatsheetHtml],
        ].map(([path, source]) => [path, createHash('sha256').update(source).digest('hex')])),
        counts: { publicClasses: legacy.defaults.size, iconCards: rows.length, cheatsheetEntries: cheats.length, catalogEntries: sets.length },
        issues,
        layerBindings,
        cheatsheetEntries: cheats,
    };
    return { catalog, report };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    if (process.argv.length !== 4 || process.argv[2] !== '--output') throw new Error('Usage: npm run manifest:import -- --output /tmp/keyrune-catalog');
    const directory = resolve(process.argv[3]);
    const legacy = await legacySources();
    const { catalog, report } = importCatalog(legacy);
    const schemaText = await read('data/sets.schema.json');
    const errors = validateCatalog(catalog, JSON.parse(schemaText), legacy);
    if (errors.length) throw new Error(errors.join('\n'));
    const outputs = { 'sets.json': JSON.stringify(catalog, null, 2) + '\n', 'reconciliation.json': JSON.stringify(report, null, 2) + '\n', 'sets.schema.json': schemaText };
    for (const file of Object.keys(outputs)) {
        const exists = await access(resolve(directory, file)).then(() => true, error => { if (error.code === 'ENOENT') return false; throw error; });
        if (exists) throw new Error(`Refusing to overwrite ${resolve(directory, file)}`);
    }
    await mkdir(directory, { recursive: true });
    for (const [file, contents] of Object.entries(outputs)) await writeFile(resolve(directory, file), contents, { flag: 'wx' });
    console.log(`Imported ${catalog.sets.length} entries; ${report.issues.length} findings recorded in ${directory}.`);
}
