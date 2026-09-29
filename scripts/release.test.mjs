import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, symlink, readFile, writeFile, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

test('release inputs update docs, README and LESS while preserving editable settings', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'keyrune-release-'));
    try {
        for (const path of ['scripts', 'templates', 'data', 'less', 'fonts', 'css', 'docs', 'package.json', 'README.md']) {
            await cp(path, join(dir, path), { recursive: true });
        }
        await symlink(resolve('node_modules'), join(dir, 'node_modules'), 'junction');
        const read = path => readFile(join(dir, path), 'utf8');
        const run = script => spawnSync(process.execPath, [script], { cwd: dir, encoding: 'utf8' });
        const pkg = JSON.parse(await read('package.json'));
        pkg.version = '9.8.7';
        await writeFile(join(dir, 'package.json'), JSON.stringify(pkg));
        await writeFile(join(dir, 'data/site.json'), JSON.stringify({ currentThrough: '<Set A> & "Set B"' }));
        const settings = await read('less/variables.less');
        const readmeBody = (await read('README.md')).replace(/^.*\n/, '');
        await rm(join(dir, 'less/version.less'));
        const built = run('scripts/build.mjs');
        assert.equal(built.status, 0, built.stderr);
        assert.match(await read('less/version.less'), /@ss-version: '9\.8\.7'/);
        assert.match(await read('css/keyrune.css'), /keyrune\.woff2\?v=9\.8\.7/);
        assert.match(await read('docs/index.html'), /Current version 9\.8\.7 includes all sets to &lt;Set A&gt; &amp; &quot;Set B&quot;/);
        assert.match(await read('docs/icons.html'), /<strong>&lt;Set A&gt; &amp; &quot;Set B&quot;<\/strong>/);
        assert.equal(await read('less/variables.less'), settings);
        assert.equal(await read('README.md'), '# Keyrune v9.8.7\n' + readmeBody);
        const previous = await read('docs/index.html');
        await writeFile(join(dir, 'data/site.json'), JSON.stringify({ currentThrough: '' }));
        const invalid = run('scripts/generate-docs.mjs');
        assert.equal(invalid.status, 1);
        assert.match(invalid.stderr, /nonempty currentThrough/);
        assert.equal(await read('docs/index.html'), previous);
    } finally {
        await rm(dir, { recursive: true, force: true });
    }
});
