import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { read, root, resolvedGlyphs } from './manifest.mjs';

import { prepareLess } from './generate-less.mjs';

import { readRelease } from './release.mjs';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;

// Values are escaped here. Only already-rendered HTML is passed as a raw slot.
export function renderTemplate(template, values, raw = []) {
    const used = new Set();
    const html = template.replace(/\{\{([a-z]+)\}\}/g, (_, key) => {
        if (!Object.hasOwn(values, key)) throw new Error(`Unknown template slot: ${key}`);
        used.add(key);
        return raw.includes(key) ? values[key] : escapeHtml(values[key]);
    });
    for (const key of Object.keys(values)) if (!used.has(key)) throw new Error(`Missing template slot: ${key}`);
    return html;
}

export function renderDocs(catalog, templates, release) {
    const icons = catalog.groups.flatMap(group => {
        const sets = catalog.sets.filter(set => set.group === group.id && set.docs?.icon !== false);
        if (!sets.length) return [];
        const cards = sets.map(set => renderTemplate(templates.icon, {
            code: set.code, name: set.name, display: set.display ?? set.name,
            glyph: resolvedGlyphs(set, catalog.sets).default, added: `v${set.added}`,
            duo: String(set.preview?.duo ?? false), classes: set.preview?.duo ? ' ss-duo ss-common' : '',
        })).join('\n');
        return [renderTemplate(templates.section, { name: group.name, cards }, ['cards'])];
    }).join('\n            ');

    // Keep the existing four visual blocks: sets, guilds, promos, and layers.
    const blocks = [[], [], [], []];
    for (const set of catalog.sets) {
        const glyphs = resolvedGlyphs(set, catalog.sets);
        const block = set.group === 'guild' ? 1 : ['promo', 'unofficial'].includes(set.group) ? 2 : 0;
        for (const code of [set.code, ...(set.aliases ?? [])]) {
            blocks[block].push({ label: `ss-${code}`, glyph: glyphs.default });
        }
        for (const [role, glyph] of Object.entries(glyphs)) {
            if (role !== 'default') blocks[3].push({ label: `${set.code} ${role.replaceAll('-', ' ')}`, glyph });
        }
    }
    const vectors = blocks.filter(block => block.length).map(block => {
        const rows = block.sort((a, b) => compare(a.label, b.label)).map(row => renderTemplate(templates.glyph, row)).join('\n');
        return renderTemplate(templates.vector, { rows }, ['rows']);
    }).join('\n                ');
    return {
        'docs/index.html': renderTemplate(templates.index, release),
        'docs/icons.html': renderTemplate(templates.icons, { sections: icons, through: release.through }, ['sections']),
        'docs/cheatsheet.html': renderTemplate(templates.cheatsheet, { vectors }, ['vectors']),
    };
}

export async function compileDocs() {
    const { catalog } = await prepareLess();
    const templates = Object.fromEntries(await Promise.all(
        ['index', 'icons', 'cheatsheet', 'icon', 'section', 'glyph', 'vector'].map(async name =>
            [name, (await read(`templates/docs/${name}.html`)).replace(/\n$/, '')]),
    ));
    const release = await readRelease();
    const pages = renderDocs(catalog, templates, release);
    const readme = await read('README.md');
    if (!/^# Keyrune v[^\n]+\n/.test(readme)) throw new Error('README.md is missing the Keyrune version heading.');
    pages['README.md'] = readme.replace(/^# Keyrune v[^\n]+/, `# Keyrune v${release.version}`).replace(/\n$/, '');
    return Object.fromEntries(Object.entries(pages).map(([path, html]) => [path, `${html}\n`]));
}

export async function generateDocs() {
    // Compile and validate every page before writing; don't touch unchanged files.
    const pages = await compileDocs();
    for (const [path, html] of Object.entries(pages)) {
        const current = await read(path).catch(error => { if (error.code !== 'ENOENT') throw error; return null; });
        if (current !== html) await writeFile(`${root}${path}`, html);
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    try {
        await generateDocs();
        console.log('Generated docs pages and README version.');
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}
