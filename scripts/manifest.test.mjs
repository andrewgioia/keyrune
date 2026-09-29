import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { read, legacySources, htmlRows, validateCatalog, resolvedGlyphs } from './manifest.mjs';
import { importCatalog } from './import-manifest.mjs';

const legacy = await legacySources();
const schema = JSON.parse(await read('data/sets.schema.json'));
const catalog = JSON.parse(await read('data/sets.json'));
const entry = code => catalog.sets.find(set => set.code === code);

test('catalog covers every v3 public code and keeps default/rarity switches distinct', () => {
    assert.deepEqual(validateCatalog(catalog, schema, legacy), []);
    assert.deepEqual(entry('c16').glyphs, { default: 'e9e5', rarity: 'e910', border: 'e9e5' });
    assert.notEqual(entry('3e').glyphs.default, entry('3ed').glyphs.default);
    assert.ok(entry('nem').aliases.includes('nms'));
    assert.equal(entry('grn').glyphs.default, resolvedGlyphs(entry('gk1'), catalog.sets).default);
    assert.notEqual(entry('grn').name, entry('gk1').name);
    assert.deepEqual(entry('sld').aliases, ['slu', 'psld']);
    assert.equal(entry('sld').symbolOf, 'pmei');
    assert.equal(entry('slu'), undefined);
    assert.equal(entry('psld'), undefined);
});

test('import is deterministic and records disagreements without changing runtime choices', () => {
    const first = importCatalog(legacy);
    assert.deepEqual(importCatalog(legacy), first);
    assert.deepEqual(first.catalog.sets.find(set => set.code === 'sld').aliases, ['slu', 'psld']);
    // Simulate a runtime/docs conflict independently of the corrected source files.
    const conflicting = structuredClone(legacy);
    for (const rule of conflicting.duo.rules) {
        if (rule.selectors.some(selector => selector.includes('.ss-otc'))) rule.glyph = 'ea1d';
    }
    const conflict = importCatalog(conflicting);
    const otc = conflict.catalog.sets.find(set => set.code === 'otc');
    assert.equal(otc.glyphs.inner, 'ea1d');
    assert.equal(otc.glyphs['inner-reference'], 'e9d3');
    assert.ok(conflict.report.issues.some(issue => issue.kind === 'layer-conflict' && issue.code === 'otc'));
    assert.equal(first.catalog.sets.some(set => set.code === 'j25a'), false);
});

test('HTML import decodes names and distinguishes copyable characters from code labels', () => {
    const html = '<h4>Core Sets</h4><div class="icon" id="a" name="A &amp; B"><span class="name"><i></i>A &amp; B <em>(a)</em></span></div>';
    assert.equal(htmlRows(html)[0].display, 'A & B');
    const rows = htmlRows('<span class="utf"><i>&#xe600;</i> ss-a <code>&amp;#xe601;</code></span>');
    assert.equal(rows[0].glyph, 'e600');
    assert.equal(rows[0].entity, 'e601');
});

test('schema and semantic checks reject malformed or incompatible changes', () => {
    const cases = [
        [draft => draft.sets[0].aliases = ['leb'], /Duplicate code or alias/],
        [draft => draft.sets[0].group = 'unknown', /unknown group/],
        [draft => draft.sets[0].added = null, /unknown added version/],
        [draft => draft.sets[0].glyphs.default = 'e601', /manifest default must match LESS/],
        [draft => draft.sets[0].glyphs.inner = '110000', /invalid Unicode scalar/],
        [draft => draft.sets[0].glyphs.inner = 'd800', /invalid Unicode scalar/],
        [draft => draft.sets[0].glyphs.inner = 'ffff', /missing font glyph/],
        [draft => draft.sets[0].glpyhs = {}, /additional properties/],
        [draft => { delete draft.sets[0].glyphs; draft.sets[0].symbolOf = 'missing'; }, /Unknown symbolOf/],
        [draft => { delete draft.sets[0].glyphs; draft.sets[0].symbolOf = draft.sets[0].code; }, /Circular symbolOf/],
        [draft => { delete draft.sets.find(set => set.code === 'dmc').glyphs.border; }, /dmc: missing border glyph/],
    ];
    for (const [change, message] of cases) {
        const draft = structuredClone(catalog);
        change(draft);
        assert.match(validateCatalog(draft, schema, legacy).join('\n'), message);
    }
});


test('import refuses an existing catalog before writing any outputs', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'keyrune-import-'));
    try {
        await writeFile(join(directory, 'sets.json'), 'reviewed catalog');
        const result = spawnSync(process.execPath, [fileURLToPath(new URL('./import-manifest.mjs', import.meta.url)), '--output', directory], { encoding: 'utf8' });
        assert.equal(result.status, 1);
        assert.match(result.stderr, /Refusing to overwrite/);
        assert.equal(await readFile(join(directory, 'sets.json'), 'utf8'), 'reviewed catalog');
        assert.deepEqual(await readdir(directory), ['sets.json']);
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});
