import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, symlink, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

test('validation rejects new discrepancies and resolved exceptions', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'keyrune-check-'));
    try {
        for (const name of ['scripts', 'less', 'css', 'fonts', 'docs', 'package.json', 'README.md']) {
            await cp(name, join(directory, name), { recursive: true });
        }
        await symlink(resolve('node_modules'), join(directory, 'node_modules'), 'junction');
        const run = () => spawnSync(process.execPath, ['scripts/check.mjs'], { cwd: directory, encoding: 'utf8' });
        const baseline = run();
        assert.equal(baseline.status, 0, baseline.stderr);
        const cases = [
            ['README.md', text => text.replace('v3.', 'v99.'), /README version differs/],
            ['css/keyrune.css', text => text + '\n', /is stale/],
            ['docs/fonts/keyrune.woff2', () => 'stale font', /differs from fonts/],
            ['fonts/keyrune.svg', text => text.replace('unicode="&#xe600;"', 'unicode="&#xffff;"'), /missing SVG font glyph e600/],
            ['docs/cheatsheet.html', text => text.replace('<i>&#xe60b;</i> ss-10e', '<i>&#xffff;</i> ss-10e'), /ss-10e: ffff differs/],
            ['docs/cheatsheet.html', text => text.replace('<i>&#xea14;</i> ss-msc <code>&amp;#xea14;', '<i>&#xea1f;</i> ss-msc <code>&amp;#xea1f;'), /Remove resolved check exception/],
        ];
        for (const [file, mutate, message] of cases) {
            const path = join(directory, file);
            const original = await readFile(path);
            await writeFile(path, mutate(original.toString()));
            const result = run();
            assert.equal(result.status, 1, file);
            assert.match(result.stderr, message);
            await writeFile(path, original);
        }
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});
