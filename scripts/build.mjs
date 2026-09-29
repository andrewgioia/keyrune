import { readFile, writeFile, mkdir, copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import less from 'less';
import CleanCSS from 'clean-css';
import { generateLess } from './generate-less.mjs';
import { generateDocs } from './generate-docs.mjs';

export const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);

export async function compile() {
    const { css } = await less.render(await readFile('less/keyrune.less', 'utf8'), {
        filename: `${root}less/keyrune.less`,
    });
    const minified = new CleanCSS({ rebase: false, level: 1 }).minify(css);
    if (minified.errors.length) throw new Error(minified.errors.join('\n'));
    return { css, min: `${minified.styles}\n` };
}

export async function build(target) {
    if (target && !['css', 'docs'].includes(target)) throw new Error(`Unknown build target: ${target}`);
    await generateLess();
    if (target !== 'docs') {
        const { css, min } = await compile();
        await mkdir('css', { recursive: true });
        await writeFile('css/keyrune.css', css);
        await writeFile('css/keyrune.min.css', min);
    }
    if (target !== 'css') {
        await generateDocs();
        await mkdir('docs/fonts', { recursive: true });
        await mkdir('docs/assets', { recursive: true });
        for (const entry of await readdir('fonts', { withFileTypes: true })) {
            if (entry.isFile() && /^keyrune\.(eot|svg|ttf|woff2?)$/.test(entry.name)) {
                await copyFile(`fonts/${entry.name}`, `docs/fonts/${entry.name}`);
            }
        }
        await copyFile('css/keyrune.min.css', 'docs/assets/keyrune.min.css');
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    await build(process.argv[2]);
    console.log('Build complete.');
}
