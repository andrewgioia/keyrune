# Keyrune v3.19.0

## The Magic: the Gathering set symbol font!

**Heads up:** the documentation page has been moved to [keyrune.andrewgioia.com](https://keyrune.andrewgioia.com)!

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

Feel free to edit the source files and compile Keyrune to fit your needs. Both LESS and Sass are supported.

## Using Keyrune on the Desktop

To copy Keyrune symbols into your desktop software (or access to vectors directly), go to the [Cheatsheet](https://keyrune.andrewgioia.com/cheatsheet.html) on the documentation site, copy the character (not the unicode representation), and then paste it into your desktop application after installing keyrune.ttf.

If you're having trouble and want step-by-step instructions and a [sample Word document](https://www.dropbox.com/s/gp45uuuejfy089n/Keyrune_desktop_example.docx?dl=1) to use, head on over to the [documentation page](https://keyrune.andrewgioia.com/)!

## License

All set symbol images are trademarks of Wizards of the Coast ([http://magicthegathering.com](http://magicthegathering.com)). Please see the LICENSE.md file for a complete description of the licenses that Keyrune is distributed under. Public attribution is **greatly appreciated** but not required!

## Changelog

The Changelog and todo items have been moved to a dedicated file, CHANGELOG.md.

## 🌐 Web Resources & Aesthetic Symbols Index
- [BIOHAZARD SYMBOL](https://synthwave-gamer-tags-10.pages.dev/symbol/biohazard-symbol/)
- [SYM 1F927](https://chibi-emoticon-world-87.pages.dev/symbol/sym-1f927/)
- [SYM 1F600](https://minimal-star-symbols-31.pages.dev/symbol/sym-1f600/)
- [NATURE FLOWERS](https://ballet-core-symbols-11.pages.dev/nature-flowers/)
- [SYM 1F60E](https://gothic-bio-fonts-24.pages.dev/symbol/sym-1f60e/)
- [SYM 1F622](https://pink-bow-fonts-37.pages.dev/symbol/sym-1f622/)
- [SYM 1D44D](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d44d/)
- [SYM 1F634](https://pink-bow-fonts-37.pages.dev/symbol/sym-1f634/)
- [SYM 26F4](https://pink-bow-fonts-37.pages.dev/symbol/sym-26f4/)
- [SYM 1D495](https://soft-angel-unicode-43.pages.dev/symbol/sym-1d495/)
- [SYM 1D465](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d465/)
- [SYM 2764 FE0F 200D 1FA79](https://raven-gothic-text-44.pages.dev/symbol/sym-2764-fe0f-200d-1fa79/)
- [TIKTOK CAPTIONS](https://pink-bow-fonts-37.pages.dev/es/tiktok-captions/)
- [BRACKETS](https://pink-bow-fonts-37.pages.dev/ja/brackets/)
- [HEARTS](https://chibi-emoticon-world-87.pages.dev/vi/hearts/)
- [SYM 1F49B](https://pink-bow-fonts-37.pages.dev/symbol/sym-1f49b/)
- [SYM 2637](https://archival-rune-symbols-42.pages.dev/symbol/sym-2637/)
- [SYM 1D47C](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d47c/)
- [FLUTTERING BUTTERFLY](https://occult-runic-fonts-23.pages.dev/symbol/fluttering-butterfly/)
- [SYM 2644](https://anime-sparkle-text-95.pages.dev/symbol/sym-2644/)
- [SYM 1F63B](https://anime-sparkle-text-95.pages.dev/symbol/sym-1f63b/)
- [CANCER ZODIAC CRAB](https://soft-angel-unicode-43.pages.dev/symbol/cancer-zodiac-crab/)
- [SYM 2636](https://coquette-aesthetic-symbols-78.pages.dev/symbol/sym-2636/)
- [SYM 1F49C](https://vintage-lace-symbols-54.pages.dev/symbol/sym-1f49c/)
- [SYM 1F60D](https://coquette-aesthetic-symbols-71.pages.dev/symbol/sym-1f60d/)
- [SYM 1F622](https://kawaii-kaomoji-hub-70.pages.dev/symbol/sym-1f622/)
- [SYM 2743](https://anime-sparkle-text-95.pages.dev/symbol/sym-2743/)
- [SYM 1F971](https://chibi-emoticon-world-87.pages.dev/symbol/sym-1f971/)
- [SYM 1D473](https://coquette-aesthetic-symbols-78.pages.dev/symbol/sym-1d473/)
- [SYM 2613](https://anime-sparkle-text-95.pages.dev/symbol/sym-2613/)
- [CLOUD WEATHER SYMBOL](https://cyber-clan-tags-24.pages.dev/symbol/cloud-weather-symbol/)
- [ZODIAC CELESTIAL](https://minimal-star-symbols-87.pages.dev/vi/zodiac-celestial/)
- [SYM 1D483](https://coquette-aesthetic-symbols-84.pages.dev/symbol/sym-1d483/)
- [SYM 1F92F](https://clean-spacing-fonts-98.pages.dev/symbol/sym-1f92f/)
- [SYM 1F912](https://vintage-script-symbols-65.pages.dev/symbol/sym-1f912/)
- [HEARTS](https://manga-speech-symbols-95.pages.dev/hearts/)
- [RIGHT HEAVY BRACKET BOX](https://vintage-coquette-text-58.pages.dev/symbol/right-heavy-bracket-box/)
- [SYM 1F603](https://chibi-emoticon-world-87.pages.dev/symbol/sym-1f603/)
- [SYM 1F600](https://minimal-star-symbols-28.pages.dev/symbol/sym-1f600/)
- [NATURE FLOWERS](https://anime-sparkle-text-24.pages.dev/ru/nature-flowers/)
- [SYM 1F49C](https://gothic-bio-fonts-81.pages.dev/symbol/sym-1f49c/)
- [SYM 2672](https://scholarly-unicode-vault-92.pages.dev/symbol/sym-2672/)
- [BORDERS DIVIDERS](https://vintage-coquette-text-58.pages.dev/ru/borders-dividers/)
- [HEARTS](https://vintage-coquette-text-58.pages.dev/ja/hearts/)
- [SYM 1F920](https://anime-sparkle-text-95.pages.dev/symbol/sym-1f920/)
- [SYM 1D42E](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d42e/)
- [SYM 1F631](https://matrix-glitch-text-84.pages.dev/symbol/sym-1f631/)
- [SYM 262F](https://delicate-pink-text-22.pages.dev/symbol/sym-262f/)
- [SYM 26FF](https://coquette-aesthetic-symbols-76.pages.dev/symbol/sym-26ff/)
- [SYM 2640](https://synthwave-bio-maker-62.pages.dev/symbol/sym-2640/)
- [SYM 1F979](https://coquette-aesthetic-symbols-78.pages.dev/symbol/sym-1f979/)
- [SPRING TULIP BLOSSOM](https://soft-angel-unicode-43.pages.dev/symbol/spring-tulip-blossom/)
- [SYM 2641](https://delicate-pink-text-22.pages.dev/symbol/sym-2641/)
- [SYM 1F629](https://aesthetic-bullet-points-76.pages.dev/symbol/sym-1f629/)
- [SYM 274B](https://baroque-font-vault-96.pages.dev/symbol/sym-274b/)
- [SYM 1F616](https://manga-bubble-symbols-94.pages.dev/symbol/sym-1f616/)
- [SYM 1F629](https://coquette-aesthetic-symbols-78.pages.dev/symbol/sym-1f629/)
- [SYM 26C0](https://cyber-clan-tags-90.pages.dev/symbol/sym-26c0/)
- [MUSIC WEATHER](https://neon-futuristic-symbols-20.pages.dev/pt/music-weather/)
- [SYM 1D408](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d408/)
- [SYM 1F61F](https://cyber-clan-tags-55.pages.dev/symbol/sym-1f61f/)
- [SYM 1F635](https://coquette-aesthetic-symbols-45.pages.dev/symbol/sym-1f635/)
- [SYM 1D402](https://kawaii-kaomoji-hub-77.pages.dev/symbol/sym-1d402/)
- [SYM 1F499](https://manga-speech-symbols-95.pages.dev/symbol/sym-1f499/)
- [SYM 1D469](https://angel-core-bios-50.pages.dev/symbol/sym-1d469/)
- [SYM 1F912](https://anime-sparkle-text-56.pages.dev/symbol/sym-1f912/)
- [SYM 2611](https://chibi-emoticon-world-87.pages.dev/symbol/sym-2611/)
- [SEA STARFISH OCEAN](https://pastel-moe-emoticons-55.pages.dev/symbol/sea-starfish-ocean/)
- [SYM 1D4A0](https://pastel-princess-fonts-68.pages.dev/symbol/sym-1d4a0/)
- [FLUTTERING BUTTERFLY](https://moe-star-kaomoji-60.pages.dev/symbol/fluttering-butterfly/)
- [AESTHETIC STARDUST COMBO](https://manga-speech-symbols-95.pages.dev/symbol/aesthetic-stardust-combo/)
- [BIOHAZARD SYMBOL](https://raven-gothic-text-44.pages.dev/symbol/biohazard-symbol/)
- [BOLD TIPPED ARROW](https://manga-speech-symbols-95.pages.dev/symbol/bold-tipped-arrow/)
- [SYM 1D45F](https://kawaii-kaomoji-hub-77.pages.dev/symbol/sym-1d45f/)
- [SYM 1D420](https://cyber-clan-tags-80.pages.dev/symbol/sym-1d420/)
- [SYM 26A6](https://daintystar-font-studio-48.pages.dev/symbol/sym-26a6/)
- [ANGEL WINGS HEART](https://coquette-aesthetic-symbols-76.pages.dev/symbol/angel-wings-heart/)
- [SYM 1D47E](https://manga-speech-symbols-95.pages.dev/symbol/sym-1d47e/)
- [SYM 2680](https://anime-sparkle-text-95.pages.dev/symbol/sym-2680/)
- [ARROWS LINES](https://coquette-aesthetic-symbols-71.pages.dev/ja/arrows-lines/)
- [SYM 1F60B](https://kawaii-kaomoji-hub-97.pages.dev/symbol/sym-1f60b/)
- [SYM 1D422](https://ballet-core-symbols-11.pages.dev/symbol/sym-1d422/)
- [TENDER GENTLE TEAR KAOMOJI](https://coquette-aesthetic-symbols-76.pages.dev/symbol/tender-gentle-tear-kaomoji/)
- [SYM 1F979](https://monochrome-bio-text-12.pages.dev/symbol/sym-1f979/)
- [BOLD TIPPED ARROW](https://ballet-core-symbols-11.pages.dev/symbol/bold-tipped-arrow/)
- [DISCORD STATUS](https://minimal-star-symbols-95.pages.dev/es/discord-status/)
- [SYM 26CE](https://pastel-moe-emoticons-55.pages.dev/symbol/sym-26ce/)
- [MUSIC WEATHER](https://chibi-emoticon-vault-78.pages.dev/ru/music-weather/)
- [SYM 26BC](https://vintage-lace-symbols-54.pages.dev/symbol/sym-26bc/)
- [SYM 2725](https://pearl-heart-symbols-95.pages.dev/symbol/sym-2725/)
- [SYM 1F9D0](https://moe-star-kaomoji-60.pages.dev/symbol/sym-1f9d0/)
- [SYM 1F479](https://anime-sparkle-text-24.pages.dev/symbol/sym-1f479/)
- [SYM 2747](https://ballet-core-symbols-11.pages.dev/symbol/sym-2747/)
- [SYM 26CD](https://pastel-moe-emoticons-55.pages.dev/symbol/sym-26cd/)
- [SYM 1F498](https://occult-aesthetic-symbols-26.pages.dev/symbol/sym-1f498/)
- [SYM 1F614](https://cyber-clan-tags-75.pages.dev/symbol/sym-1f614/)
- [SYM 1D446](https://vintage-lace-symbols-54.pages.dev/symbol/sym-1d446/)
- [GEMINI ZODIAC TWINS](https://raven-gothic-text-44.pages.dev/symbol/gemini-zodiac-twins/)
- [SYM 262B](https://ballet-core-symbols-11.pages.dev/symbol/sym-262b/)
- [GAMING WEAPONS](https://gothic-bio-fonts-81.pages.dev/pt/gaming-weapons/)
- [BORDERS DIVIDERS](https://classic-poetry-fonts-16.pages.dev/es/borders-dividers/)
- [GREEK PSI TRIDENT](https://simple-line-fonts-11.pages.dev/symbol/greek-psi-trident/)
- [SYM 1D468](https://angelic-bio-symbols-59.pages.dev/symbol/sym-1d468/)
- [SYM 2610](https://coquette-aesthetic-symbols-62.pages.dev/symbol/sym-2610/)
- [SYM 1D498](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d498/)
- [NATURE FLOWERS](https://simple-line-fonts-11.pages.dev/ja/nature-flowers/)
- [SYM 26D8](https://clean-spacing-fonts-98.pages.dev/symbol/sym-26d8/)
- [DAGGER CROSS SYMBOL](https://moe-star-kaomoji-60.pages.dev/symbol/dagger-cross-symbol/)
- [SYM 1F62E](https://cyber-clan-tags-90.pages.dev/symbol/sym-1f62e/)
- [SYM 1D478](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d478/)
- [OPEN CENTRE STAR](https://daintystar-font-studio-48.pages.dev/symbol/open-centre-star/)
- [SYM 1D4A4](https://pink-bow-fonts-37.pages.dev/symbol/sym-1d4a4/)
- [SYM 1D45E](https://alchemy-occult-symbols-55.pages.dev/symbol/sym-1d45e/)
- [SYM 1D43E](https://vintage-lace-symbols-54.pages.dev/symbol/sym-1d43e/)
- [SYM 1D41D](https://cyber-clan-tags-36.pages.dev/symbol/sym-1d41d/)
- [MUSIC WEATHER](https://soft-angel-unicode-43.pages.dev/ja/music-weather/)
- [SYM 1F974](https://geometric-bio-symbols-76.pages.dev/symbol/sym-1f974/)
- [FREE FIRE CLAN EMPEROR CROWN](https://ballet-core-symbols-11.pages.dev/symbol/free-fire-clan-emperor-crown/)
- [MUSIC WEATHER](https://ballet-core-symbols-11.pages.dev/ja/music-weather/)
- [SYM 2664](https://anime-sparkle-text-95.pages.dev/symbol/sym-2664/)
- [OPEN CENTRE STAR](https://neon-glitch-fonts-25.pages.dev/symbol/open-centre-star/)
- [SYM 1D48F](https://mecha-matrix-symbols-75.pages.dev/symbol/sym-1d48f/)
- [SYM 1F970](https://manga-bubble-symbols-94.pages.dev/symbol/sym-1f970/)
- [SYM 26D8](https://classic-poetry-fonts-16.pages.dev/symbol/sym-26d8/)
- [SYM 1D445](https://cyber-clan-tags-24.pages.dev/symbol/sym-1d445/)
- [SYM 2733](https://chibi-faces-hub-88.pages.dev/symbol/sym-2733/)
- [AESTHETIC STARDUST COMBO](https://soft-angel-unicode-43.pages.dev/symbol/aesthetic-stardust-combo/)
- [SYM 1F610](https://anime-sparkle-text-95.pages.dev/symbol/sym-1f610/)
- [SYM 1F49E](https://zen-space-symbols-89.pages.dev/symbol/sym-1f49e/)
- [SYM 260A](https://chibi-emoticon-world-87.pages.dev/symbol/sym-260a/)
