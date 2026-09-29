import chokidar from 'chokidar';
import { build } from './build.mjs';

// One build at a time; changes during a build trigger one more pass.
let running = false;
let pending = false;
let timer;
async function rebuild() {
    pending = true;
    if (running) return;
    running = true;
    while (pending) {
        pending = false;
        try {
            await build();
            console.log('Build complete.');
        } catch (error) {
            console.error(error.message);
            console.error('Waiting for the next change to retry.');
        }
    }
    running = false;
}
const watcher = chokidar.watch(['less', 'fonts', 'data/sets.json', 'data/sets.schema.json', 'templates/docs', 'package.json'], {
    ignoreInitial: true,
    ignored: path => /(?:^|[/\\])less[/\\](?:icons|glyphs)\.less$/.test(path),
    awaitWriteFinish: { stabilityThreshold: 200, pollInterval: 50 },
});
watcher.on('all', () => {
    clearTimeout(timer);
    timer = setTimeout(rebuild, 100);
});
watcher.on('error', error => { console.error(error); process.exit(1); });
watcher.on('ready', () => console.log('Watching LESS, fonts, the manifest, and docs templates.'));
for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, async () => { clearTimeout(timer); await watcher.close(); process.exit(0); });
}
