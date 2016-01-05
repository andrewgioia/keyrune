# Keyrune v1.4.2

## The Magic: the Gathering set symbol font!

Keyrune is the first suite of complete Magic: the Gathering expansion and set symbols as a pictographic font. You can use this font anywhere you want to display set symbols&mdash;in your MtG app or website, documents, card images, anything!

## Usage

Each set symbol has its own font character. Display them in a manner similar to [Font Awesome](http://fontawesome.io) using the `<i class="ss ss-exp"></i>` element. Class name codes are based on the expansion codes from [MTG JSON](http://mtgjson.com).

To use Keyrune, move the font files to your `/fonts` directory and include the keyrune.css stylesheet in your `<head>`:

```html
<link href="css/keyrune.css" rel="stylesheet" type="text/css" />
```

## Editing the Source

Feel free to edit the source files and compile Keyrune to fit your needs. Currently LESS is supported, with Sass coming soon.

## Using Keyrune on the Desktop

To copy Keyrune symbols into your desktop software (or access to vectors directly), go to the [Cheatsheet](http://andrewgioia.github.io/Keyrune/cheatsheet.html) on the documentation site, copy the character (not the unicode representation), and then paste it into your desktop application after installing keyrune.otf.

## License

All set symbol images are copyright Wizards of the Coast ([http://magicthegathering.com](http://magicthegathering.com))

The Keyrune font is licensed under the the SIL OFL 1.1 ([http://scripts.sil.org/OFL](http://scripts.sil.org/OFL))

Keyrune CSS, LESS, and Sass files are licensed under the MIT License ([http://opensource.org/licenses/mit-license.html](http://opensource.org/licenses/mit-license.html))

Attribution is **greatly appreciated** but not required!

## Changelog

* v0.1 - initial font creation and CSS/LESS files for all sets up to Fate Reforged
* v0.2 - all fonts are fluid width now so they will scale correctly without scaled padding; fixed width class added
* v1.0 - public launch via /r/magicTCG! added Dragons of Tarkir (DTK)
* v1.0.1 - Tempest Remastered added (non major set version)
* v1.0.2 - Modern Masters 2015 added
* v1.1.0 - Woff2 support added; Vintage Masters icon added
* v1.2.0 - Cheatsheet added to documentation site; variables changed in LESS files to be Keyrune specific
* v1.3.0 - Magic Origins icon added
* v1.3.1 - Duel Decks: Zendikar v. Eldrazi added
* v1.4.0 - Battle for Zendikar added
* v1.4.1 - Zendikar Expeditions added
* v1.4.2 - Commander 2015 added
* v1.4.3 - Beginning of white border add-on with .ss-border class; renamed font to Keyrune for desktop.

## Todo

* Add Oath of the Gatewatch
