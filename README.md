
[![image-to-ascii](http://i.imgur.com/pKydY5P.png)](#)

# image-to-ascii [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/image-to-ascii.svg)](https://www.npmjs.com/package/image-to-ascii) [![Downloads](https://img.shields.io/npm/dt/image-to-ascii.svg)](https://www.npmjs.com/package/image-to-ascii) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A Node.JS module that converts images to ASCII art.

[![image-to-ascii](http://i.imgur.com/Om8G7dZ.png)](#)

## :cloud: Installation

```sh
$ npm i --save image-to-ascii
```


:bulb: **ProTip**: You can install the [cli version of this module](http://github.com/IonicaBizau/image-to-ascii-cli) by running `npm i -g image-to-ascii-cli`

Check out the [INSTALLTION.md](/INSTALLTION.md) guide for more information.

## :clipboard: Example



```js
// Dependencies
const imageToAscii = require("image-to-ascii");

// The path can be either a local path or an url
imageToAscii("https://octodex.github.com/images/octofez.png", (err, converted) => {
    console.log(err || converted);
});

// Passing options
imageToAscii("https://octodex.github.com/images/privateinvestocat.jpg", {
    colored: false
}, (err, converted) => {
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

## :memo: Documentation


### `imageToAscii(source, options, callback)`
Converts the provided image in ASCII art.

#### Params
- **String** `source`: The path/url to the image.
- **Object|String** `options`: The path to the image or an object containing the following fields:

 **Size Options**:
  - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
  - `size` (Object): The size of the result image (ASCII art)—interpreted by
    [`compute-size`](https://github.com/IonicaBizau/compute-size):
    - `height` (Number|String): The height value (default: `"100%"`).
    - `width` (Number|String): The width value (default: computed value to
       keep aspect ratio). This is optional if the height is provided.
  - `size_options` (Object): The options for
    [`compute-size`](https://github.com/IonicaBizau/compute-size):
    - `screen_size` (Object): The screen size (defaults to terminal width
    and height):
        - `width` (Number): The screen width.
        - `height` (Number): The screen height.
    - `px_size` (Object): The pixel size.
        - `width` (default: `1`)
        - `height` (default: `1`)
    - `preserve_aspect_ratio` (Boolean): If `false`, the aspect ratio will
      not be preserved (default: `true`).
    - `fit_screen` (Boolean): If `false`, the result size will not fit to
      screen (default: `true`).

 **Matrix asciifier options**:
  - `stringify` (Boolean): If `false`, the pixel objects will not be
    stringified.
  - `concat` (Boolean): If `false`, the pixel objects will not be joined
    together.

 **Pixel asciifier options**:

  - `pixels` (Array|String): An array or string containing the characters
     used for converting the pixels in strings
     (default: `" .,:;i1tfLCG08@"`).
  - `reverse` (Boolean): If `true`, the pixels will be reversed creating a
     *negative image* effect (default: `false`).
  - `colored` (Boolean): If `true`, the output will contain ANSI styles
    (default: `true`).
  - `bg` (Boolean): If `true`, the **background** color will be used for
    coloring (default: false).
  - `fg` (Boolean): If `true`, the **foreground** color will be used for
    coloring (default: true).
  - `white_bg` (Boolean): Turn on the white background for transparent
    pixels (default: `true`).
  - `px_background` (Object): An object containing the `r` (red), `g`
    (green) and `b` (blue) values of the custom background color.

 **Other options**:
  - `image_type` (String): Use this to explicitely provide the image type.
  - `stringify_fn` (Function): A function getting the `pixels` matrix and
    the `options` in the arguments. Use this option to implement your own
    stringifier.
- **Function** `callback`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`alphabet-cli`](https://github.com/joliveros/alphabet-cli#readme)—undefined
 - [`ascii-github`](https://npmjs.com/package/ascii-github)—GitHub CLI Client
 - [`cli-github`](https://github.com/IonicaBizau/cli-github)—A fancy GitHub client for command line.
 - [`doomjs`](https://github.com/codezilla-it/doom#readme) (by Fabio Cencetti)—A bunch of modular gulp tasks
 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)—Gif animations in your terminal!
 - [`ick`](https://github.com/nteract/ick#readme) (by Kyle Kelley)—Interactive Console Experiment
 - [`image-to-ascii-cli`](https://github.com/IonicaBizau/image-to-ascii-cli#readme)—View images in text format, in your terminal.
 - [`image-to-js`](https://github.com/xinyu198736/image-to-js#readme) (by yutou)—用js代码和图片，生成一段可以正常运行的图形化的js源代码
 - [`img-to-svg`](https://github.com/IonicaBizau/img-to-svg#readme)—Convert the image pixels in SVG squares.
 - [`imgurize`](https://github.com/mkaminsky11/imgurize) (by Michael Kaminsky)—an Imgur browser in the terminal
 - [`joctodex`](https://github.com/IonicaBizau/joctodex#readme)—Octocats in terminal!
 - [`js2image`](https://github.com/xinyu198736/image-to-js#readme) (by yutou)—用js代码和图片，生成一段可以正常运行的图形化的js源代码
 - [`nrk-tv-cli`](https://github.com/Starefossen/nrk-tv-cli#readme) (by Hans Kristian Flaatten)—Command line client for interacting with TV programs from the Norwegian Broadcasting Corporation (NRK)
 - [`salestock-cli`](https://npmjs.com/package/salestock-cli) (by Muhammad Mustadi)—salestock CLI app
 - [`terminal-sidecar`](https://npmjs.com/package/terminal-sidecar) (by Kyle Kelley)—Jupyter sidecar in your terminal
 - [`tmuxos`](https://github.com/TmuxOS/TmuxOS)—The awesome power of command line is finally revealed.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
