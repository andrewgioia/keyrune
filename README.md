# Keyrune v2.2.0

## The Magic: the Gathering set symbol font!

**Check it out:** our documentation page is online at [andrewgioia.github.io/Keyrune](https://andrewgioia.github.io/Keyrune)!

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

To copy Keyrune symbols into your desktop software (or access to vectors directly), go to the [Cheatsheet](http://andrewgioia.github.io/Keyrune/cheatsheet.html) on the documentation site, copy the character (not the unicode representation), and then paste it into your desktop application after installing keyrune.ttf.

If you're having trouble and want step-by-step instructions and a [sample Word document](https://www.dropbox.com/s/gp45uuuejfy089n/Keyrune_desktop_example.docx?dl=1) to use, head on over to the [documentation page](https://andrewgioia.github.io/Keyrune)!

## License

All set symbol images are copyright Wizards of the Coast ([http://magicthegathering.com](http://magicthegathering.com))

The Keyrune font is licensed under the the SIL OFL 1.1 ([http://scripts.sil.org/OFL](http://scripts.sil.org/OFL))

Keyrune CSS, LESS, and Sass files are licensed under the MIT License ([http://opensource.org/licenses/mit-license.html](http://opensource.org/licenses/mit-license.html))

Attribution is **greatly appreciated** but not required!

## Changelog

* v2.2.0 - Duel Deck: Mind vs. Might added thanks to @csuhta
* v2.1.6 - Foil rarity added; corrected Kaladesh Inventions code to mps (mp1 alias remains)
* v2.1.5 - FTV: Vaults icon added (April Fools 2009 set); Archenemy: Nicol Bolas is now the same exact glyph as Archenemy
* v2.1.4 - Timeshifted rarity added
* v2.1.3 - Archenemy: Nicol Bolas added
* v2.1.2 - Magic Online Treasure Chest added, thanks to @csuhta
* v2.1.1 - Commander Anthology
* v2.1.0 - A whole slew of new promo and digital symbols thanks to @fenhl
* v2.0.1 - Xbox Media Promo symbol from original Duels of the Planeswalkers on Xbox
* v2.0.0 - Keyrune, now with sass! Thanks to @jordanbrauer
* v1.8.0 - Amonkhet icon added; re-organized Readme with new updates at top
* v1.7.2 - Added Kaladesh Inventions icon (labeled as MP1)
* v1.7.1 - Cleaned up icon files to remove any with multiple paths; fixed UNH icon
* v1.7.0 - Lots of new sets! Kaladesh, Aether Revolt, Modern Masters 2017, Planechase Anthology, Commander 2016, and Duel Decks: Nissa v. Ob Nixilis added
* v1.6.2 - Added Legendary Cube icon; unfortunately there's no official set code
* v1.6.1 - Updated EMN with the official high-res source image
* v1.6.0 - Eldritch Moon icon added (based on low-res WOTC graphic)
* v1.5.6 - Added forgotten Salvat 2005 and 2011 (inserts into MTG Encyclopedias)
* v1.5.5 - Duel Deck: Blessed vs. Cursed added
* v1.5.4 - Welcome Deck 2016
* v1.5.3 - FTV: Angels and FTV: Lore
* v1.5.2 - Conspiracy 2: Take the Crown added
* v1.5.1 - Eternal Masters added
* v1.5.0 - Oath of the Gatewatch and Shadows Over Innistrad added
* v1.4.3 - Beginning of white border add-on with .ss-border class; renamed font to Keyrune for desktop
* v1.4.2 - Commander 2015 added
* v1.4.1 - Zendikar Expeditions added
* v1.4.0 - Battle for Zendikar added
* v1.3.1 - Duel Decks: Zendikar v. Eldrazi added
* v1.3.0 - Magic Origins icon added
* v1.2.0 - Cheatsheet added to documentation site; variables changed in LESS files to be Keyrune specific
* v1.1.0 - Woff2 support added; Vintage Masters icon added
* v1.0.2 - Modern Masters 2015 added
* v1.0.1 - Tempest Remastered added (non major set version)
* v1.0.0 - public launch via /r/magicTCG! added Dragons of Tarkir (DTK)
* v0.2.0 - all fonts are fluid width now so they will scale correctly without scaled padding; fixed width class added
* v0.1.0 - initial font creation and CSS/LESS files for all sets up to Fate Reforged

## Todo

* New [Coming Soon](http://magic.wizards.com/en/game-info/products/coming-soon) product page has symbols but not the necessary higher res versions
* Figure out what the Legendary Cube official set code is; currently using `xLCU`
