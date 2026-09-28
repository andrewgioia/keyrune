import { readdir, rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

export function planRenames(names) {
    const targets = new Set();
    for (const name of names) {
        const target = name.toLowerCase();
        if (targets.has(target)) throw new Error(`Filename collision: ${target}`);
        targets.add(target);
    }
    return names.filter(name => name !== name.toLowerCase()).map(name => [name, name.toLowerCase()]);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const directory = new URL('../fonts/', import.meta.url);
    const entries = await readdir(directory, { withFileTypes: true });
    const plan = planRenames(entries.map(entry => entry.name));
    for (const [from, to] of plan) {
        if (!entries.find(entry => entry.name === from).isFile()) continue;
        await rename(new URL(from, directory), new URL(to, directory));
        console.log(`${from} -> ${to}`);
    }
}
