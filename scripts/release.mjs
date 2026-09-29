import { read } from './manifest.mjs';

export async function readVersion() {
    const { version } = JSON.parse(await read('package.json'));
    if (typeof version !== 'string' || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)) {
        throw new Error('package.json must contain a valid version.');
    }
    return version;
}

export async function readRelease() {
    const site = JSON.parse(await read('data/site.json'));
    if (!site || typeof site.currentThrough !== 'string' || !site.currentThrough.trim()
        || Object.keys(site).some(key => key !== 'currentThrough')) {
        throw new Error('data/site.json must contain a nonempty currentThrough string.');
    }
    return { version: await readVersion(), through: site.currentThrough };
}
