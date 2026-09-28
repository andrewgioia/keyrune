# Update the LESS source

Add the set class and its assigned font codepoint to `less/icons.less`:

```less
.@{ss-prefix}-fdn:before { content: "\e9d8"; } // Foundations
```

Use the codepoint from your IcoMoon export and preserve existing assignments.
Aliases may share a glyph. Where needed, update `less/duo.less` or
`less/border.less` for the existing layered symbol support.

Next: [Generate CSS](GenerateCss.md).
