# Update the symbol catalog

Add the set to `data/sets.json`, using the codepoint from your IcoMoon export.
Preserve existing assignments. For example:

```json
{
  "code": "fdn",
  "name": "Foundations",
  "group": "core",
  "added": "3.15.0",
  "glyphs": { "default": "e9d8" }
}
```

`added` is the Keyrune version that introduced the symbol. Use `aliases` for
additional public class names and `symbolOf` when a distinct product shares
another entry's glyph inventory. See [the catalog guide](../data/README.md).

`less/icons.less` and `less/glyphs.less` are generated from this catalog.
Do not edit them directly. Simple symbols need no handwritten LESS changes.

For layered symbols, add named roles such as `inner`, `rarity`, or `border` to
`glyphs`, then reference their variables in `less/duo.less` or `less/border.less`:

```less
&.@{ss-prefix}-mic::after {
    content: @ss-glyph-mic-inner;
}
```

Keep positioning, colors, and conditional selectors in those handwritten files.
Set `preview.duo: true` in the manifest when the docs should preview duo styling.

Next: [Generate CSS](GenerateCss.md).
