# Keyrune v1.7.2

__Note:__

This is the SASS (`.scss`) version of Keyrune. If you are looking for the LESS version, please got to the [master branch](https://github.com/andrewgioia/Keyrune/tree/master).

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
* v1.4.3 - Beginning of white border add-on with .ss-border class; renamed font to Keyrune for desktop
* v1.5.0 - Oath of the Gatewatch and Shadows Over Innistrad added
* v1.5.1 - Eternal Masters added
* v1.5.2 - Conspiracy 2: Take the Crown added
* v1.5.3 - FTV: Angels and FTV: Lore
* v1.5.4 - Welcome Deck 2016
* v1.5.5 - Duel Deck: Blessed vs. Cursed added
* v1.5.6 - Added forgotten Salvat 2005 and 2011 (inserts into MTG Encyclopedias)
* v1.6.0 - Eldritch Moon icon added (based on low-res WOTC graphic)
* v1.6.1 - Updated EMN with the official high-res source image
* v1.6.2 - Added Legendary Cube icon; unfortunately there's no official set code
* v1.7.0 - Lots of new sets! Kaladesh, Aether Revolt, Modern Masters 2017, Plancechase Anthology, Commander 2016, and Duel Decks: Nissa v. Ob Nixilis added
* v1.7.1 - Cleaned up icon files to remove any with multiple paths; fixed UNH icon
* v1.7.2 - Added Kaladesh Inventions icon (labeled as MP1)

## Todo

* New [Coming Soon](http://magic.wizards.com/en/game-info/products/coming-soon) product page has symbols but not the necessary higher res versions
* Figure out what the Legendary Cube official set code is; currently using `xLCU`
* Look into tying a universal `.json` (modified version of mtg.json perhaps) file into the project to allow SASS and JavaScript to share variables.
  * This will be useful for programmatically generating a complete glossary page (gh-pages) of icons. (similar to other font-package documentation pages [font-awesome, glyph-icons, google-md, etc]).
* Add a changelog generator to the project(?), reducing the amount of maintenance required to add new sets/features. :)
* Integrate with Mana symbol font project(?) into a singular MtG font package (LESS, and SASS versions).
