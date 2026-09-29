import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, symlink, readFile, writeFile, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import less from 'less';
import { read, contentRules } from './manifest.mjs';
import { renderLess, prepareLess } from './generate-less.mjs';

const catalog = JSON.parse(await read('data/sets.json'));

test('generated mappings support custom prefixes, aliases, shared glyphs, and manual switches', async () => {
    const { files } = await prepareLess();
    assert.deepEqual(renderLess(catalog), Object.fromEntries(Object.entries(files).filter(([path]) => path !== 'less/version.less')));
    const { css } = await less.render(`@ss-prefix: test;\n${files['less/glyphs.less']}\n${files['less/icons.less']}\n${await read('less/duo.less')}\n${await read('less/border.less')}`);
    const mappings = new Map(contentRules(css).flatMap(rule => rule.selectors.map(selector => [selector, rule.glyph])));
    assert.equal(mappings.get('.test-sld:before'), 'e687');
    assert.equal(mappings.get('.test-slu:before'), 'e687');
    assert.equal(mappings.get('.test-psld:before'), 'e687');
    for (const [code, glyph] of [['c16', 'e910'], ['j25', 'e9db']]) {
        assert.equal(mappings.get(`.test-border.test-${code}::before`), glyph);
        assert.equal(mappings.get(`.test-border.test-${code}::after`), catalog.sets.find(set => set.code === code).glyphs.border);
    }
    assert.equal(mappings.get('.test-duo.test-mic::after'), 'ea23');
    assert.equal(mappings.get('.test-duo.test-voc::after'), 'ea24');
    assert.equal(mappings.get('.test-border.test-tmt::marker'), 'ea07');
});

test('generation rejects ambiguous variable names', () => {
    const draft = { groups: [{ id: 'test', name: 'Test' }], sets: [
        { code: 'a', name: 'A', group: 'test', glyphs: { default: 'e600', 'b-default': 'e601' } },
        { code: 'a-b', name: 'B', group: 'test', glyphs: { default: 'e601' } },
    ] };
    assert.throws(() => renderLess(draft), /Duplicate glyph variable/);
});

test('generation bootstraps missing outputs, follows manifest edits, and preserves files on failure', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'keyrune-less-'));
    try {
        for (const path of ['scripts', 'data', 'less', 'fonts', 'package.json']) await cp(path, join(directory, path), { recursive: true });
        await symlink(resolve('node_modules'), join(directory, 'node_modules'), 'junction');
        await rm(join(directory, 'less/icons.less'));
        await rm(join(directory, 'less/glyphs.less'));
        const draft = structuredClone(catalog);
        draft.sets.push({ code: 'test-new', name: 'Test new', group: 'core', added: '3.19.0', symbolOf: 'lea', aliases: ['test-alias'] });
        draft.sets.find(set => set.code === 'c16').glyphs.rarity = 'e601';
        const manifest = join(directory, 'data/sets.json');
        await writeFile(manifest, JSON.stringify(draft));
        const run = () => spawnSync(process.execPath, ['scripts/generate-less.mjs'], { cwd: directory, encoding: 'utf8' });
        const first = run();
        assert.equal(first.status, 0, first.stderr);
        const paths = ['less/icons.less', 'less/glyphs.less'];
        const before = await Promise.all(paths.map(path => readFile(join(directory, path), 'utf8')));
        assert.ok(before[0].includes('.@{ss-prefix}-test-alias:before'));
        assert.ok(before[1].includes('@ss-glyph-c16-rarity: "\\e601";'));
        const again = run();
        assert.equal(again.status, 0, again.stderr);
        assert.deepEqual(await Promise.all(paths.map(path => readFile(join(directory, path), 'utf8'))), before);
        delete draft.sets.find(set => set.code === 'c16').glyphs.rarity;
        await writeFile(manifest, JSON.stringify(draft));
        const invalid = run();
        assert.equal(invalid.status, 1);
        assert.match(invalid.stderr, /ss-glyph-c16-rarity is undefined/);
        assert.deepEqual(await Promise.all(paths.map(path => readFile(join(directory, path), 'utf8'))), before);
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});
