[![image-to-ascii](http://i.imgur.com/pKydY5P.png)](#)

# image-to-ascii [![Support this project][donate-now]][paypal-donations]

A Node.JS module that converts images to ASCII art.

[![image-to-ascii](http://i.imgur.com/sjowkpL.png)](#)

## Installation

Install [Graphics Magick](http://www.graphicsmagick.org/).

```sh
# Ubuntu
$ sudo apt-get install graphicsmagick

# Fedora
$ sudo dnf install GraphicsMagick

# OS X
$ brew install graphicsmagick

# Chocolatey (package manager for Windows)
# (Restart of cmd/PowerShell is required)
$ choco install graphicsmagick
```

Then, you can install this package:

```sh
$ npm i image-to-ascii
```

## Example

```js
// Dependencies
var ImageToAscii = require("image-to-ascii");

// Convert to ascii this image
ImageToAscii("https://scontent-fra3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10171857_956002364413311_4523194503692702568_n.jpg?oh=3c07329ae90e10be00d0552e86b91571&oe=56DB376A", function(err, converted) {
    console.log(err || converted);
});
```

In order to run the `webcam.sh` provided in the `example` folder, you will also need streamer. The script uses streamer to make webcam pictures and converts them into ASCII art using the `webcam.js`

```sh
# Ubuntu
$ sudo apt-get install streamer
```

To run the script just use:

```sh
sh webcam.sh
```

## Documentation

### `ImageToAscii(options, callback)`
Converts the provided image in ASCII art.

#### Params
- **Object|String** `options`: The path to the image or an object containing the following fields:
 - `path` (String): The path to the image.
 - `pixels` (String|Array): The pixels that will be used to render the ASCII image (default: `" .,:;i1tfLCG08@"`).
 - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
 - `reverse` (Boolean): If `true`, the pixels will be reversed (default: `false`).
 - `colored` (Boolean): If `true`, the result will be colored (default: `true`).
 - `aRatio` (Boolean): If `true`, the aspect ratio will be kept (default: `false`).
 - `imageMagick` (Boolean): If `true`, ImageMagick will be used instead of `GraphicsMagick` (default: `false`).
 - `size` (Object): The size of the result image (ASCII art):
    - `height` (Number|String): The height value (default: `"100%"`).
    - `width` (Number|String): The width value (default: computed value to keep aspect ratio).
- **Function** `callback`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`alphabet-cli`](https://github.com/joliveros/alphabet-cli#readme)

 - [`ascii-github`](https://npmjs.com/package/ascii-github)

 - [`cli-github`](https://github.com/IonicaBizau/cli-github)

 - [`cli-sunset`](https://github.com/IonicaBizau/cli-sunset)

 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)

 - [`image-to-js`](https://github.com/xinyu198736/image-to-js#readme) by yutou

 - [`imgurize`](https://github.com/mkaminsky11/imgurize) by Michael Kaminsky

 - [`joctodex`](https://github.com/IonicaBizau/joctodex#readme)

 - [`js2image`](https://github.com/xinyu198736/image-to-js#readme) by yutou

 - [`nrk-tv-cli`](https://github.com/Starefossen/nrk-tv-cli#readme) by Hans Kristian Flaatten

 - [`salestock-cli`](https://npmjs.com/package/salestock-cli) by Muhammad Mustadi

 - [`tmuxos`](https://github.com/TmuxOS/TmuxOS)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md