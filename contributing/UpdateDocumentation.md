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
    + <span class="utf"><i>&#xe9d8;</i> ss-fdn <code>&amp;#xe9d8;</code></span>
    ```
    Replace `fdn` with the short code of the new icon.
3. Add the new icon usage inside the `icons.html`.
    ```diff
    + <div class="icon" id="fdn" name="Foundation" data-name="Foundation" data-class="fdn" data-unicode="xe9d8" data-added="v3.14.0">
    +    <span class="name"><i class="ss ss-fdn"></i> Foundation <em>(fdn)</em></span>
    + </div>
    ```
    Replace `fdn` with the short code of the new icon.

    > A data attribute with the version is present, but i don't know how it's working. If you have info about it, please add it in this doc here. 🙏

You can open each html file in your browser to see the changes. Or use tools like `Live Server` in Visual Studio Code.
Normally you can see the changes in the `./cheatsheet.html` and `./icons.html` .

![cheatsheet.html](./images/cheatsheet-html.png) ![icons.html](./images/icons-html.png)

Yaay! You have successfully updated the documentation. 🎉

You can now commit your changes and create a pull request.