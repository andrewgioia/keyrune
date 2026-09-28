# V3 symbol catalog

`sets.json` is the phase 1 catalog. It records the existing v3 symbols and glyph
assignments. The documentation and LESS are still maintained in their existing
files until phase 2 adds generation. No Hugo build is involved.

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
| `preview.duo` | Whether the existing icon preview enables `.ss-duo`. Defaults to false; it is not a declaration that a symbol has any particular layer. |
| `docs.icon` | Defaults to true. False preserves a public class that was absent from the existing icon reference. |
| `notes` | Maintenance context. |

Array order preserves category and icon-reference ordering. Undocumented entries
are appended within their category. The future cheatsheet can sort by code
independently. Different products with shared artwork retain separate entries.
Aliases do not get separate product records. `slu` and `psld` are confirmed aliases of `sld`; SLD itself shares PMEI’s glyph inventory. `j25a` stays hidden for now. Release dates and search tags are
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

## Next phase

Review the reconciliation findings, then generate icon-reference HTML,
cheatsheet HTML, and default LESS mappings from the catalog. Preserve page URLs,
public class names, existing glyph assignments, and custom rendering rules.
Generation should replace the current LESS agreement checks with generated-file
checks. Add the manifest and templates to the watcher when generation exists.
In phase 3, generate named glyph variables for the handwritten layer rules.
