# V3 symbol catalog

`sets.json` is the v3 catalog and the source for the generated icon reference
and cheatsheet. LESS mappings and overrides are still handwritten and validated
against the catalog. No Hugo build is involved.

## Files

| File | Purpose |
| --- | --- |
| `sets.json` | Ordered categories and symbol entries. |
| `sets.schema.json` | JSON Schema for validation and editor completion. |
| `reconciliation.json` | Import evidence: source hashes, findings, exact layer selectors, and original cheatsheet entries. |
| `RECONCILIATION.md` | Readable summary of findings to review before generating docs. |

The reconciliation files are migration records, not runtime configuration. Their
line numbers and hashes refer to the source snapshot at import time.

## Entry fields

| Field | Meaning |
| --- | --- |
| `code` | Canonical public CSS suffix, without `ss-`. |
| `name` | Full name where the existing metadata agrees; otherwise the visible grid label pending review. |
| `display` | Optional shorter grid label; defaults to `name`. |
| `group` | ID from the ordered `groups` array. |
| `added` | First Keyrune version, without `v`. `null` explicitly means unknown; fill it from release history before adding a new docs card. |
| `glyphs` | Named hexadecimal Unicode assignments. `default` is required. Other roles describe artwork, not rendering states. |
| `symbolOf` | Shares another entry's entire glyph inventory. Mutually exclusive with `glyphs`; does not inherit metadata, aliases, or rendering behavior. |
| `aliases` | Additional public class suffixes from grouped LESS selectors or confirmed alias decisions. Does not promise identical border/duo behavior. |
| `preview.duo` | Whether the icon preview enables `.ss-duo`. Defaults to false; it is not a declaration that a symbol has any particular layer. |
| `docs.icon` | Defaults to true. False hides its icon card while retaining its public classes in the cheatsheet. |
| `notes` | Maintenance context. |

Array order preserves category and icon-reference ordering. Undocumented entries
are appended within their category. The future cheatsheet can sort by code
independently. Different products with shared artwork retain separate entries.
Aliases do not get separate product records. `slu` and `psld` are confirmed aliases of `sld`; SLD itself shares PMEI’s glyph inventory. Release dates and search tags are
not needed for this first migration and have not been backfilled.

### Default and layered glyphs

C16 explicitly records the switch that its handwritten border rule implements:

```json
{
  "code": "c16",
  "name": "Commander 2016",
  "group": "commander",
  "added": "1.7.0",
  "glyphs": {
    "default": "e9e5",
    "rarity": "e910",
    "border": "e9e5"
  }
}
```

The default and border roles may share a codepoint. `rarity`, `inner`, and
`border` are common roles; more specific names are supported where needed.
OTC's confirmed `inner` value is `e9d3`; the LESS and catalog now agree.
If a future import finds conflicting layer assignments, it retains the alternate
under a `-reference` role for review before generating variables. The manifest contains no CSS conditions or pseudo-element
rules. `less/duo.less` and `less/border.less` remain handwritten.

## Commands

```bash
npm run docs:generate
npm run manifest:check
npm run check
npm test
```

`manifest:check` validates the schema, unique codes/groups, references and cycles,
Unicode scalars, SVG font coverage, and agreement with every existing public
LESS default and per-symbol layer glyph. `check` includes these checks, so the
existing CI validation also covers the manifest. Glyph validation uses the SVG
font export; it does not compare outlines across binary font formats.

To repeat the import for comparison, write to a new directory:

```bash
npm run manifest:import -- --output /tmp/keyrune-catalog
```

The importer uses the current files and refuses to overwrite existing outputs.
It creates a candidate catalog, schema, and JSON reconciliation record. Do not
replace reviewed metadata by blindly reimporting. The importer retains current
LESS assignments and reports conflicting docs values, rather than changing font
behavior or guessing the intent of a manual override.

## Updating symbols and pages

1. Export the font and update the handwritten LESS mappings or overrides as needed.
2. Add or edit the entry in `sets.json`. Use `preview.duo: true` for a layered
   preview, `display` for a shorter grid label, and `aliases` for additional class
   names. Shared products can use `symbolOf` without sharing preview settings.
3. Run `npm run build` and `npm run check`, or leave `npm run dev` / `dev:valet`
   running to regenerate while editing.
4. Commit the manifest, source changes, and generated pages/assets together.

`templates/docs/icons.html` and `cheatsheet.html` hold the page shells and modal
script. The `icon`, `section`, `glyph`, and `vector` partials hold repeated HTML.
Slots use `{{name}}` syntax; values are HTML-escaped, and only rendered fragments
are inserted as HTML. Unknown or missing slots fail generation.

Icon cards follow manifest group and entry order. Hidden cards are omitted;
aliases never get separate cards. The cheatsheet includes all public classes,
including hidden entries and aliases, plus every non-default glyph role for
each canonical entry. Role names become labels (for example `inner-wing` becomes
“inner wing”). Entries sort by label within the sets, guilds, promos/unofficial,
and layers blocks. A layer can repeat a default codepoint because its named role
is useful documentation.

Generated pages are committed for static hosting. `npm run check` compares them
with fresh output without rewriting them. Changing names, groups, or visibility
no longer requires editing existing HTML before generation. The import command
is a migration aid; ordinary updates should edit the catalog directly. Historical
reconciliation files are not generation inputs and are not refreshed by builds.

## Next slice

Generate default LESS mappings from the catalog, then named glyph variables for
the handwritten duo and border overrides. Until then, validation requires every
public LESS class and layer assignment to agree with the manifest.
