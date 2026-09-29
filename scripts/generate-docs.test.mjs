import test from 'node:test';
import assert from 'node:assert/strict';
import { read, htmlRows, legacySources, validateCatalog, resolvedGlyphs } from './manifest.mjs';
import { renderDocs, renderTemplate, compileDocs } from './generate-docs.mjs';

const catalog = JSON.parse(await read('data/sets.json'));
const templates = Object.fromEntries(await Promise.all(
    ['icons', 'cheatsheet', 'icon', 'section', 'glyph', 'vector'].map(async name =>
        [name, await read(`templates/docs/${name}.html`)]),
));

test('generated docs cover canonical cards, aliases, and every named layer', async () => {
    const pages = await compileDocs();
    assert.deepEqual(await compileDocs(), pages);
    const cards = htmlRows(pages['docs/icons.html']);
    const rows = htmlRows(pages['docs/cheatsheet.html']);
    assert.equal(new Set(rows.map(row => row.label)).size, rows.length);
    assert.deepEqual(cards.map(card => card.id), catalog.groups.flatMap(group =>
        catalog.sets.filter(set => set.group === group.id && set.docs?.icon !== false).map(set => set.code)));
    for (const set of catalog.sets) {
        const glyphs = resolvedGlyphs(set, catalog.sets);
        for (const code of [set.code, ...(set.aliases ?? [])]) {
            const row = rows.find(row => row.label === `ss-${code}`);
            assert.equal(row?.glyph, glyphs.default, code);
            assert.equal(row?.entity, glyphs.default, code);
            if (code !== set.code) assert.ok(!cards.some(card => card.id === code));
        }
        for (const [role, glyph] of Object.entries(glyphs)) {
            if (role === 'default') continue;
            const row = rows.find(row => row.label === `${set.code} ${role.replaceAll('-', ' ')}`);
            assert.equal(row?.glyph, glyph, `${set.code}.${role}`);
            assert.equal(row?.entity, glyph);
        }
    }
    for (const code of ['c16', 'j25']) {
        const card = cards.find(card => card.id === code);
        assert.equal(card['data-unicode'], catalog.sets.find(set => set.code === code).glyphs.default);
    }
});

test('manifest edits control names, visibility, groups, and duo without consulting old docs', async () => {
    const draft = structuredClone(catalog);
    const alpha = draft.sets.find(set => set.code === 'lea');
    alpha.name = 'A & B "quoted" <example>';
    alpha.display = 'Short & sweet';
    alpha.group = 'unofficial';
    alpha.preview = { duo: true };
    const beta = draft.sets.find(set => set.code === 'leb');
    beta.docs = { icon: false };
    const legacy = await legacySources({ includeDocs: false });
    assert.deepEqual(validateCatalog(draft, JSON.parse(await read('data/sets.schema.json')), legacy), []);
    const pages = renderDocs(draft, templates);
    const cards = htmlRows(pages['docs/icons.html']);
    const card = cards.find(card => card.id === 'lea');
    assert.equal(card['data-name'], alpha.name);
    assert.equal(card.display, alpha.display);
    assert.equal(card.group, 'Unofficial Symbols');
    assert.equal(card['data-duo'], 'true');
    assert.ok(pages['docs/icons.html'].includes('ss ss-lea ss-duo ss-common'));
    assert.ok(!cards.some(card => card.id === 'leb'));
    assert.ok(htmlRows(pages['docs/cheatsheet.html']).some(row => row.label === 'ss-leb'));
    assert.ok(!pages['docs/icons.html'].includes('<example>'));
});

test('template errors fail explicitly instead of silently dropping content', () => {
    assert.throws(() => renderTemplate('{{unknown}}', { name: 'A' }), /Unknown template slot/);
    assert.throws(() => renderTemplate('No slot', { name: 'A' }), /Missing template slot/);
});
