import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const workflow = await readFile(new URL('../.github/workflows/docs-cleanup.yml', import.meta.url), 'utf8');
const source = workflow.split('          script: |\n')[1].replace(/^            /gm, '');
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
const cleanup = new AsyncFunction('github', 'context', 'process', source);

function fixture({ missing = false, truncated = false, conflict = false } = {}) {
    const removed = [];
    let updates = 0;
    const github = { rest: { git: {
        async getRef() {
            if (missing) throw Object.assign(new Error('Missing branch'), { status: 404 });
            return { data: { object: { sha: 'head' } } };
        },
        async getCommit() { return { data: { tree: { sha: 'tree' } } }; },
        async getTree() {
            return { data: { truncated, tree: ['index.html', 'pr-12/index.html', 'pr-123/index.html'].map(path => ({ path, mode: '100644', type: 'blob' })) } };
        },
        async createTree({ tree }) { removed.push(...tree); return { data: { sha: 'next-tree' } }; },
        async createCommit() { return { data: { sha: 'next-commit' } }; },
        async updateRef({ force }) {
            assert.equal(force, false);
            if (++updates === 1 && conflict) throw Object.assign(new Error('Concurrent update'), { status: 422 });
        },
    } } };
    return { removed, run: () => cleanup(github, { repo: { owner: 'test', repo: 'test' } }, { env: { PR_NUMBER: '12' } }) };
}

test('preview cleanup deletes only the closed PR and retries concurrent updates', async () => {
    const f = fixture({ conflict: true });
    await f.run();
    assert.equal(f.removed.length, 2);
    for (const entry of f.removed) assert.deepEqual(entry, { path: 'pr-12/index.html', mode: '100644', type: 'blob', sha: null });
});
test('preview cleanup accepts absent gh-pages and rejects incomplete tree data', async () => {
    await fixture({ missing: true }).run();
    const f = fixture({ truncated: true });
    await assert.rejects(f.run(), /truncated tree/);
    assert.deepEqual(f.removed, []);
});
