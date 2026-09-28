import test from 'node:test';
import assert from 'node:assert/strict';
import { planRenames } from './normalize-fonts.mjs';

test('normalizes exported names and leaves lowercase names alone', () => {
    assert.deepEqual(planRenames(['Keyrune.TTF', 'keyrune.woff2']), [['Keyrune.TTF', 'keyrune.ttf']]);
});
test('rejects a collision before any files can be renamed', () => {
    assert.throws(() => planRenames(['Other.WOFF', 'Keyrune.ttf', 'keyrune.ttf']), /collision/);
});
