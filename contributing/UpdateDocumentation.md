# Update existing documentation

After you have added a new set icon, update the codebase and generate the new `keyrune.css` file, you need to update the documentation to reflect the changes.

## Steps

1. Run this command
    ```bash
    npm run build
    ```
    This will copy fonts and css files to the `docs` folder.
2. Add the new icon usage inside the `cheatsheet.html`.
    ```diff
    + <div class="icon">
    ```
    Replace `fdn` with the short code of the new icon.
3. Add the new icon usage inside the `icons.html`.
    ```diff
    + <div class="icon" id="fdn" name="Foundation" data-name="Foundation" data-class="fdn" data-unicode="x1f31f" data-added="v3.14.0">
    +    <span class="name"><i class="ss ss-fdn"></i> Foundation <em>(fdn)</em></span>
    + </div>
    ```
    Replace `fdn` with the short code of the new icon.

    > A data attribute with the version is present, but i don't know how it's working. If you have info about it, please add it in this doc here. 🙏