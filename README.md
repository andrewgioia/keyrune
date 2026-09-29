# Keyrune v3.19.0

## The Magic: the Gathering set symbol font!

**Heads up:** the documentation page has been moved to [keyrune.andrewgioia.com](https://keyrune.andrewgioia.com)!

Keyrune is the first suite of complete Magic: the Gathering expansion and set symbols as a pictographic font. You can use this font anywhere you want to display set symbols&mdash;in your MtG app or website, documents, card images, anything!

## Usage

Each set symbol has its own font character. Display them in a manner similar to [Font Awesome](http://fontawesome.io) using the `<i class="ss ss-exp"></i>` element. Class name codes are based on the expansion codes from [MTG JSON](http://mtgjson.com).

To use Keyrune via source, NPM, or Bower, move the font files to your `/fonts` directory and include the keyrune.css stylesheet in your `<head>`:

```html
<link href="css/keyrune.css" rel="stylesheet" type="text/css" />
```

**NEW:** you can now include Keyrune via CDN thanks to the amazing [jsDelivr](http://jsdelivr.com) project! To include the latest version, reference:

```html
<link href="//cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css" rel="stylesheet" type="text/css" />
```

**Note:** as of v3.1.1 (June 2017) the URL format for jsDelivr changed to the above. They still maintain backwards compatibility for everything prior to that but going forward please use the above URL. You no longer need to explicitly include the font-family via `@font-face` as well, but if you still would like to here is the css ruleset:

```css
@font-face {
  font-family: 'Keyrune';
  src: url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.eot');
  src: url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.eot?#iefix') format('embedded-opentype'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.woff2') format('woff2'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.woff') format('woff'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.ttf') format('truetype'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

## Editing the source

Styles are maintained in LESS. Use Node 24 LTS (recorded in `.nvmrc`) and npm:

```bash
nvm use
npm ci
npm run dev
```

`dev` builds the assets and generated pages, then watches LESS, fonts, the manifest,
and docs templates. It serves the docs at http://127.0.0.1:4310 with browser reload.
Edit `templates/docs/` for the icon reference and cheatsheet; other HTML and docs CSS
edits reload directly.
Build errors are printed in the terminal; fix the source and the watcher retries
on the next change. Stop both processes with Ctrl+C.

### Using Valet

If Valet links `keyrune.lan` to this project's `docs/` directory and the site is
secured, run:

```bash
npm run dev:valet
```

Open [https://keyrune.lan:4310](https://keyrune.lan:4310) for live reload.
BrowserSync proxies Valet and reads the existing certificate and key from
`~/.config/valet/Certificates/`; certificate files stay outside the repository.
Run either `dev` or `dev:valet` at a time, since both use port 4310.
If the port is occupied, BrowserSync selects the next available port; use the
URL printed in the terminal.

To use [https://keyrune.lan](https://keyrune.lan) without a port, run
`npm run build && npm run watch` and refresh the browser manually after edits.
Valet serves the rebuilt docs directly. No Valet configuration changes are needed.

### Build and release commands

```bash
npm run build            # Generate LESS and docs, compile CSS, and copy assets
npm run less:generate    # Generate default mappings and glyph variables only
npm run docs:generate    # Generate icon reference and cheatsheet only
npm run check            # Check symbols, versions, and generated files
npm test                 # Test validation and filename collision handling
npm run fonts:normalize  # Lowercase newly imported font filenames
```

`build:css` generates LESS, then compiles and minifies; `build:docs` generates LESS
and both docs pages and
copies existing assets. Run the full build before committing, and commit the
generated HTML, CSS, and docs assets.
`check` verifies glyph coverage against the exported SVG font; it does not verify
that every binary font format contains identical outlines. Existing cheatsheet
discrepancies are listed in `scripts/check-exceptions.json`; remove each exception
when its ticket is fixed. New discrepancies and resolved exceptions fail validation.

Before a release, update the package version and lockfile, `less/variables.less`,
the README heading, and the version in `docs/index.html`. Run `npm run build`,
`npm run check`, and `npm pack --dry-run`. npm runs `prepack` to build and check
before creating the package. Use `npm publish` only when ready to release.

The docs use a vendored copy of Zepto in `docs/assets/zepto.min.js`; npm does not
manage it. Font generation remains in IcoMoon; see [CONTRIBUTING.md](CONTRIBUTING.md).

### Symbol manifest and generated docs

Edit `data/sets.json` for symbol names, categories, aliases, previews, and glyph
assignments. `npm run docs:generate` produces `docs/icons.html` and
`docs/cheatsheet.html` from that catalog and `templates/docs/`. Build and watch
run this automatically. Edit templates for page layout or modal changes; direct
edits to these two generated HTML files will be overwritten.

The icon reference has one card per visible canonical entry. The cheatsheet
lists every public class (including aliases) and every named layer. Group order
and card order follow the manifest; cheatsheet entries sort by label within the
existing sets, guilds, promos, and layers blocks.

The manifest also generates `less/icons.less` and `less/glyphs.less`. Edit
`less/duo.less` and `less/border.less` for special rendering behavior, referencing
named variables such as `@ss-glyph-c16-rarity`. Build and watch generate LESS
before compiling CSS. Generated LESS files are excluded from watch triggers.
`npm run manifest:check` validates the catalog and handwritten overrides;
`npm run check` also rejects outdated generated LESS and HTML. See [the catalog guide](data/README.md) for the format
and workflow.

### Scripts

This project contains the following build and test scripts. Test scripts are run via `npm test`:

| File | Purpose |
| --- | --- |
| `manifest.mjs` | Loads the catalog and validates its schema, SVG font coverage, references, and compiled mappings. |
| `import-manifest.mjs` | Imports a candidate catalog and reconciliation evidence into a new directory without overwriting existing files. |
| `manifest.test.mjs` | Tests v3 mapping preservation, manual glyph switches, aliases, shared symbols, and invalid catalog data. |
| `generate-less.mjs` | Generates default LESS mappings and named glyph variables, validating handwritten layer rules before writing. |
| `generate-less.test.mjs` | Tests prefixes, aliases, layer switches, manifest edits, and regeneration without existing outputs. |
| `build.mjs` | Generates LESS, compiles and minifies CSS, generates docs pages, and copies CSS/fonts into `docs/`. Supports CSS-only and docs-only builds. |
| `generate-docs.mjs` | Generates the icon reference and cheatsheet from the manifest and HTML templates. |
| `generate-docs.test.mjs` | Checks card, alias, and layer coverage; metadata edits; HTML escaping; and template errors. |
| `watch.mjs` | Watches LESS, fonts, the manifest, docs templates, and package metadata. Queues rebuilds to prevent overlap and retries after errors when files change. |
| `browser-sync.valet.cjs` | Configures the HTTPS Valet proxy and live reload, using your existing certificate and port 4310. |
| `normalize-fonts.mjs` | Lowercases imported font filenames, checking for collisions before renaming anything. |
| `check.mjs` | Validates versions, generated assets, SVG font glyph coverage, and cheatsheet codepoints. |
| `check-exceptions.json` | Lists existing cheatsheet issues temporarily allowed by validation. Remove entries as you fix them. |
| `check.test.mjs` | Tests that validation catches broken mappings, stale assets, missing glyphs, and resolved exceptions. |
| `normalize-fonts.test.mjs` | Tests filename normalization and collision detection. |
| `preview-cleanup.test.mjs` | Tests the GitHub workflow's preview cleanup logic, including preserving other previews and handling concurrent updates. |


## Using Keyrune on the desktop

To copy Keyrune symbols into your desktop software (or access to vectors directly), go to the [Cheatsheet](https://keyrune.andrewgioia.com/cheatsheet.html) on the documentation site, copy the character (not the unicode representation), and then paste it into your desktop application after installing keyrune.ttf.

If you're having trouble and want step-by-step instructions and a [sample Word document](https://www.dropbox.com/s/gp45uuuejfy089n/Keyrune_desktop_example.docx?dl=1) to use, head on over to the [documentation page](https://keyrune.andrewgioia.com/)!

## License

All set symbol images are trademarks of Wizards of the Coast ([http://magicthegathering.com](http://magicthegathering.com)). Please see the LICENSE.md file for a complete description of the licenses that Keyrune is distributed under. Public attribution is **greatly appreciated** but not required!

## Changelog

The Changelog and todo items have been moved to a dedicated file, CHANGELOG.md.