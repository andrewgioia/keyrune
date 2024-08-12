# Update Codebase

> exemple with the set icon of the set "Fondation" (FDN)

## Prerequisites

You need to have `lessc` and `sass` installed on your computer.

## Steps

1. Open the `sass/_variables.scss` file in the repository.
2. Add the new set icon in the `@keyrune-icons` list. (You can see that i add the short code `fdn` and the unicode character `1f31f`)
    ```diff
    + ("Foundations", "fdn", "\1f31f"),
    ```

3. Open the `less/icons.less` file in the repository.
4. Add the new set icon in the `@keyrune-icons` list. (You can see that i add the short code `fdn` and the unicode character `1f31f`)
    ```diff
    + .@{ss-prefix}-fdn:before { content: "\1f31f"; } // Foundation
    ```

Yaay 🎉 you have update the codebase now everything is ready only one steps to use the new icon

---
**Go to the next step: [Generate CSS](./GenerateCss.md)**
---