import { readFile, readdir } from 'node:fs/promises';
import { compile } from './build.mjs';
import { compileDocs } from './generate-docs.mjs';
import { legacySources, validateCatalog } from './manifest.mjs';

const errors = validateCatalog(
    JSON.parse(await readFile('data/sets.json', 'utf8')),
    JSON.parse(await readFile('data/sets.schema.json', 'utf8')),
    await legacySources({ includeDocs: false }),
);
const read = path => readFile(path, 'utf8');
const expect = (condition, message) => { if (!condition) errors.push(message); };
try {
    for (const [path, content] of Object.entries(await compileDocs())) {
        expect(await read(path) === content, `${path} is stale; run npm run docs:generate.`);
    }
} catch (error) {
    errors.push(error.message);
}
const pkg = JSON.parse(await read('package.json'));
const variables = await read('less/variables.less');
expect(variables.match(/@ss-version:\s*'([^']+)'/)?.[1] === pkg.version, 'Package and LESS versions differ.');
expect((await read('README.md')).startsWith(`# Keyrune v${pkg.version}\n`), 'README version differs.');
expect((await read('docs/index.html')).includes(`Current version ${pkg.version} `), 'Docs version differs.');
const expected = await compile();
for (const [path, content] of [['css/keyrune.css', expected.css], ['css/keyrune.min.css', expected.min], ['docs/assets/keyrune.min.css', expected.min]]) {
    expect(await read(path) === content, `${path} is stale; run npm run build.`);
}
for (const extension of ['eot', 'svg', 'ttf', 'woff', 'woff2']) {
    const path = `fonts/keyrune.${extension}`;
    expect((await readFile(path)).equals(await readFile(`docs/${path}`)), `docs/${path} differs from ${path}.`);
}
const glyphs = new Set([... (await read('fonts/keyrune.svg')).matchAll(/<glyph\b[^>]*unicode="&#x([\da-f]+);"/gi)].map(match => parseInt(match[1], 16)));
for (const file of await readdir('less')) {
    if (!file.endsWith('.less')) continue;
    for (const match of (await read(`less/${file}`)).matchAll(/content:\s*["']\\([\da-f]+)["']/gi)) {
        expect(glyphs.has(parseInt(match[1], 16)), `${file}: missing SVG font glyph ${match[1]}.`);
    }
}
// Read compiled selectors so grouped aliases are handled exactly as LESS emits them.
const mappings = new Map();
for (const [, selectors, hex] of expected.css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{\s*content:\s*"\\([\da-f]+)";?\s*\}/gi)) {
    for (const selector of selectors.split(',')) {
        const match = selector.trim().match(/^\.ss-([\w-]+):before$/);
        if (match) mappings.set(match[1], parseInt(hex, 16));
    }
}
const cheatsheet = await read('docs/cheatsheet.html');
const entries = [... cheatsheet.matchAll(/<span class="utf"><i>&#x([\da-f]+);<\/i>\s*([^<]+?)\s*<code>&amp;#x([\da-f]+);<\/code><\/span>/gi)];
expect(entries.length === [...cheatsheet.matchAll(/<span class="utf">/g)].length,
    'Cheatsheet has malformed entries; use the documented character/class/code format.');
const seen = new Set();
for (const [, glyph, code, label] of entries) {
    expect(!seen.has(code), `Cheatsheet duplicates ${code}.`);
    seen.add(code);
    if (code.startsWith('ss-')) {
        expect(mappings.get(code.slice(3)) === parseInt(glyph, 16), `Cheatsheet ${code}: ${glyph} differs from LESS ${mappings.get(code.slice(3))?.toString(16)}.`);
    }
    expect(glyphs.has(parseInt(glyph, 16)), `Cheatsheet ${code}: missing SVG font glyph ${glyph}.`);
    expect(parseInt(glyph, 16) === parseInt(label, 16), `Cheatsheet ${code}: character and label differ.`);
}
// An alias does not need another copyable entry if its glyph is already listed.
const listedGlyphs = new Set(entries.map(entry => parseInt(entry[1], 16)));
for (const [code, glyph] of mappings) expect(listedGlyphs.has(glyph), `Cheatsheet missing glyph for ss-${code} (${glyph.toString(16)}).`);
const exceptions = JSON.parse(await read('scripts/check-exceptions.json')).issues;
const unexpected = errors.filter(error => !exceptions.includes(error));
for (const exception of exceptions) {
    if (!errors.includes(exception)) unexpected.push(`Remove resolved check exception: ${exception}`);
}
if (unexpected.length) {
    console.error(unexpected.join('\n'));
    process.exitCode = 1;
} else {
    if (exceptions.length) console.warn(`${exceptions.length} known cheatsheet discrepancies remain in scripts/check-exceptions.json.`);
    console.log(`Checks passed: ${mappings.size} symbols, SVG glyph coverage, versions, and generated assets.`);
}
