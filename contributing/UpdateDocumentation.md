# Review the generated documentation

`npm run build` generates `docs/icons.html` and `docs/cheatsheet.html` from
`data/sets.json`. It also generates `docs/index.html` using the package version
and `currentThrough` from `data/site.json`. You no longer need to add entries manually to either page.
For docs-only generation, run `npm run docs:generate`.

The icon reference uses the manifest's name, group, codepoint, added version,
and preview settings. Use `display` for a shorter grid label or `docs.icon: false`
to hide a card. Aliases appear in the cheatsheet without separate icon cards.
The cheatsheet lists every public class and named glyph layer.

Edit `templates/docs/` to change page layout or modal behavior. Direct edits to
the generated HTML will be overwritten on the next build.

Preview with `npm run dev` or `npm run dev:valet`. Check the symbol in the grid,
its modal rarity/border controls, and its copyable cheatsheet entries.
Run `npm run check` to verify mappings and generated files, then commit your
changes and create a pull request.

For releases, set the package version with `npm version <version> --no-git-tag-version`
and update `data/site.json`. Build synchronizes the docs, README version heading,
and LESS version variable.
