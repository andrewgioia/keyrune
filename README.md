# Keyrune v3.6.3

## The Magic: the Gathering set symbol font!

**Check it out:** our documentation page is online at [andrewgioia.github.io/Keyrune](https://andrewgioia.github.io/Keyrune)!

Keyrune is the first suite of complete Magic: the Gathering expansion and set symbols as a pictographic font. You can use this font anywhere you want to display set symbols&mdash;in your MtG app or website, documents, card images, anything!

## Usage

Each set symbol has its own font character. Display them in a manner similar to [Font Awesome](http://fontawesome.io) using the `<i class="ss ss-exp"></i>` element. Class name codes are based on the expansion codes from [MTG JSON](http://mtgjson.com).

To use Keyrune via source, NPM, or Bower, move the font files to your `/fonts` directory and include the keyrune.css stylesheet in your `<head>`:

```html
<link href="css/keyrune.css" rel="stylesheet" type="text/css" />
```

**NEW:** you can now include Keyrune via CDN thanks to the amazing [jsDelivr](http://jsdelivr.com) project! To include the latest version, reference:

```html
<link href="//cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css" rel="stylesheet" type="text/css" />
```

**Note:** as of v3.1.1 (June 2017) the URL format for jsDelivr changed to the above. They still maintain backwards compatibility for everything prior to that but going forward please use the above URL. You no longer need to explicitly include the font-family via `@font-face` as well, but if you still would like to here is the css ruleset:

```css
@font-face {
  font-family: 'Keyrune';
  src: url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.eot');
  src: url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.eot?#iefix') format('embedded-opentype'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.woff2') format('woff2'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.woff') format('woff'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.ttf') format('truetype'),
    url('//cdn.jsdelivr.net/npm/keyrune@latest/fonts/keyrune.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

## Editing the Source

Feel free to edit the source files and compile Keyrune to fit your needs. Currently LESS is supported, with Sass coming soon.

## Using Keyrune on the Desktop

To copy Keyrune symbols into your desktop software (or access to vectors directly), go to the [Cheatsheet](http://andrewgioia.github.io/Keyrune/cheatsheet.html) on the documentation site, copy the character (not the unicode representation), and then paste it into your desktop application after installing keyrune.ttf.

If you're having trouble and want step-by-step instructions and a [sample Word document](https://www.dropbox.com/s/gp45uuuejfy089n/Keyrune_desktop_example.docx?dl=1) to use, head on over to the [documentation page](https://andrewgioia.github.io/Keyrune)!

## License

All set symbol images are trademarks of Wizards of the Coast ([http://magicthegathering.com](http://magicthegathering.com)). Please see the LICENSE.md file for a complete description of the licenses that Keyrune is distributed under. Public attribution is **greatly appreciated** but not required!

## Changelog

* v3.6.1 - Issuing fonts under OFL 1.1 and package under GPL now
* v3.6.0 - Big 2020 update: unofficials for Theros: Beyond Death, Ikoria: Lair of Behemoths, Core 2021, Zendikar Rising, promo PTG, and Game Night 2019; ELD updated with official
* v3.5.0 - Throne of Eldraine (unofficial) and Commander 2019 added; SCSS files cleaned up and tested; SVG files now distributed with project
* v3.4.3 - Magic 2020 (finally) added, sorry everyone. M19 symbol updated to M20 style it should have been.
* v3.4.2 - Signature Spellbook: Gideon added, Mirage symbol corrected
* v3.4.1 - Fixed issue with desktop version not updating (version numbers must be present in ttf on some systems)
* v3.4.0 - War of the Spark and Modern Horizons unofficial icons added, GK2 alias
* v3.3.3 - Ravnica Allegiance added (official symbol)
* v3.3.2 - Ultimate Masters icon added
* v3.3.1 - All 10 guilds added as Guild Kit symbols
* v3.3.0 - Adding Guilds of Ravnica, Game Night, and Mythic Edition. Breaking: this is now `MED` and the original conflicting Masters Edition is now `ME1`.
* v3.2.4 - Assigning pMEI to now added 2016 Heroes promo set
* v3.2.4 - Gatherer-style ABUR symbols added
* v3.2.3 - Commander 2018 added, replaced DDT with official source image
* v3.2.2 - New MTGO Arena, Signature Series: Jace, and Global Series: Jiang Yanggu & Mu Yanling symbols added
* v3.2.1 - Official Dominaria symbol replaced for DOM, drawn BBD and M19 symbols added, fixed mixing DDS in scss version
* v3.2.0 - Dominaria and Commander Anthology 2 icons drawn from low-resolution versions
* v3.1.10 - Final Duel Deck: Elves vs. Inventors added
* v3.1.9 - Official Masters 25 icon added
* v3.1.8 - New promo symbols for Sega Dreamcast cards (issue 59) and The Sorcerer's Apprentice movie cards (issue 60)
* v3.1.7 - Added the symbol used in The Duelist's "Extra Pulled" fantasy card column (issue 58)
* v3.1.6 - Added FTV: Transform and HasCon 2017 promo symbols
* v3.1.5 - Updated IMA and C17 with official hi-res versions; added FNM as an unofficial symbol (pFNM) and the heart symbol on Phoenix Heart (pHEART)
* v3.1.4 - New icons for Iconic Masters (IMA), Commander 2017 (C17), and Merfolk vs. Goblins (DDT), based on low-res version from Coming Soon
* v3.1.3 - Correcting the set code for Dragon*Con
* v3.1.2 - Added Dragon*Con promo symbol for Nalathni Dragon
* v3.1.1 - Minor corrections for versioning and updates to readme for jsDelivr
* v3.1.0 - Slew of new icons for Ixalan, Rivals of Ixalan, Explorers of Ixalan, and Unstable; corrected Hour of Devastation icon based on official release
* v3.0.3 - Adding new (correct) Archenemy: Nicol Bolas symbol with confirmed set code (e01)
* v3.0.2 - Fixing BRB path issue
* v3.0.1 - Adding IDW Promo icon and clenaing up some core set icons
* v3.0.0 - [Big update!](https://github.com/andrewgioia/Keyrune/milestone/1) Many symbols were compared and corrected to the original card version, 6 unofficial icons added, and new preview on doc site
* v2.3.0 - Adding Hour of Devastation symbol (awaiting higher resolution source)
* v2.2.3 - Adding Welcome Deck 2017 symbol
* v2.2.2 - Adding Amonkhet Invocation symbol; correcting Portal: Second Age set code and leaving alias
* v2.2.1 - Adding alias for Nemesis
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

* Update C18 with officially released source image
* Validate all class names to handle official set codes, MODO codes, and MTGJson/community fallbacks
