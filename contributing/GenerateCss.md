# Generate CSS

Use Node 24 LTS and install the project tools with `npm ci`. No global LESS
installation is needed. Sass is not supported.

Run `npm run build` to generate LESS mappings and variables, compile and minify
CSS, generate the docs pages, and copy CSS/fonts into the documentation.
For automatic rebuilding and browser reload, use `npm run dev` or `npm run dev:valet`.

Commit the manifest, generated `less/icons.less` and `less/glyphs.less`, both CSS
files, and updated docs pages/assets along with any font or override changes.
Run `npm run check` and `npm test` before committing.

Next: [Review the documentation](UpdateDocumentation.md).
