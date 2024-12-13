# Keyrune v3.16.1

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