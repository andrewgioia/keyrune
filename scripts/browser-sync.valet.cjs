const { existsSync } = require('node:fs');
const { homedir } = require('node:os');
const { join } = require('node:path');

const hostname = 'keyrune.lan';
const certificates = join(homedir(), '.config', 'valet', 'Certificates');
const key = join(certificates, `${hostname}.key`);
const cert = join(certificates, `${hostname}.crt`);

if (!existsSync(key) || !existsSync(cert)) {
    throw new Error(`Valet certificates for ${hostname} are missing. Secure the Valet site first, or use npm run dev for the standalone server.`);
}

module.exports = {
    proxy: `https://${hostname}`,
    listen: hostname,
    port: 4310,
    https: { key, cert },
    files: 'docs/**/*',
    open: false,
    ui: false,
    notify: false,
    ghostMode: false,
};
