# Generate CSS

Use Node 24 LTS and install the project tools with `npm ci`. No global LESS
installation is needed. Sass is not supported.

Run `npm run build` to compile LESS, minify CSS, and copy CSS and fonts into the
documentation. For automatic rebuilding and browser reload, use `npm run dev`.

Commit both files in `css/` and the updated assets in `docs/`.
Run `npm run check` before committing.

Next: [Update the documentation](UpdateDocumentation.md).
