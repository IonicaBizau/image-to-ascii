
[![image-to-ascii](http://i.imgur.com/pKydY5P.png)](#)

# image-to-ascii

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/image-to-ascii.svg)](https://www.npmjs.com/package/image-to-ascii) [![Downloads](https://img.shields.io/npm/dt/image-to-ascii.svg)](https://www.npmjs.com/package/image-to-ascii)

> A Node.JS module that converts images to ASCII art.

[![image-to-ascii](http://i.imgur.com/Om8G7dZ.png)](#)

## :cloud: Installation

```sh
$ npm i --save image-to-ascii
```


:bulb: **ProTip**: You can install the [cli version of this module](http://github.com/IonicaBizau/image-to-ascii-cli) by running `npm i -g image-to-ascii-cli`

Check out the [INSTALLATION.md](INSTALLATION.md) guide for more information.

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`aceituna`](https://github.com/davepgreene/aceituna#readme) (by Dave Greene)—Drool worthy
 - [`alphabet-cli`](https://github.com/joliveros/alphabet-cli#readme)—undefined
 - [`ascii-github`](https://npmjs.com/package/ascii-github)—GitHub CLI Client
 - [`bing-cli`](https://github.com/scottbea/bing-cli#readme) (by Scott Beaudreau)—Use Bing Search in the terminal via command line
 - [`bronos`](https://github.com/kswilster/bronos#readme) (by Keith Williams)—A sonos cli for bros
 - [`cli-emoji`](https://github.com/IonicaBizau/cli-emoji#readme)—Big emojis in your terminal.
 - [`cli-github`](https://github.com/IonicaBizau/cli-github)—A fancy GitHub client for command line.
 - [`doomjs`](https://github.com/codezilla-it/doom#readme) (by Fabio Cencetti)—A bunch of modular gulp tasks
 - [`gif-cli`](https://github.com/IonicaBizau/gif-cli)—Gif animations in your terminal!
 - [`gongxi`](https://github.com/clonn/gongxi) (by clonn)—恭喜系列 cli
 - [`goteem`](https://npmjs.com/package/goteem) (by Austin Kelleher, a@alk.im)—goteem
 - [`ick`](https://github.com/nteract/ick#readme) (by Kyle Kelley)—Interactive Console Experiment
 - [`image-to-ascii-cli`](https://github.com/IonicaBizau/image-to-ascii-cli#readme)—View images in text format, in your terminal.
 - [`image-to-js`](https://github.com/xinyu198736/image-to-js#readme) (by yutou)—用js代码和图片，生成一段可以正常运行的图形化的js源代码
 - [`img-to-svg`](https://github.com/IonicaBizau/img-to-svg#readme)—Convert the image pixels in SVG squares.
 - [`imgurize`](https://github.com/mkaminsky11/imgurize) (by Michael Kaminsky)—an Imgur browser in the terminal
 - [`joctodex`](https://github.com/IonicaBizau/joctodex#readme)—Octocats in terminal!
 - [`js2image`](https://github.com/xinyu198736/image-to-js#readme) (by yutou)—用js代码和图片，生成一段可以正常运行的图形化的js源代码
 - [`kayak-inside`](https://github.com/stewartulm/inside#readme) (by Stewart Ulm)—Team Directory
 - [`mdy`](https://github.com/IonicaBizau/mdy#readme)—View markdown files in the command line with ANSI styled images.
 - [`nobro`](https://github.com/marsch/nodarkside#readme) (by Mario Scheliga)—Prevent brothers and sisters from falling to the dark side by robbing their npm-workflow virginity
 - [`node.cobol`](https://github.com/IonicaBizau/node.cobol#readme)—Node.js bridge for COBOL which allows you to run Node.js code from COBOL.
 - [`noslide-js`](https://github.com/crazyguitar/noslide.js#readme) (by fly)—A Simple Terminal slide tool
 - [`nrk-tv-cli`](https://github.com/Starefossen/nrk-tv-cli#readme) (by Hans Kristian Flaatten)—Command line client for interacting with TV programs from the Norwegian Broadcasting Corporation (NRK)
 - [`path-cli`](https://npmjs.com/package/path-cli) (by Muhammad Mustadi)—[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
 - [`protractor-screenshoter-plugin`](https://github.com/azachar/protractor-screenshoter-plugin) (by Andrej Zachar)—A jasmine2 protractor plugin that captures for each browser instance a screenshot and browsers' console logs. The snapshot is made optionally for each expect or spec. Plugins comes with a beautiful angular based analytics tool to visually check and fix te
 - [`salestock-cli`](https://npmjs.com/package/salestock-cli) (by Muhammad Mustadi)—salestock CLI app
 - [`terminal-sidecar`](https://npmjs.com/package/terminal-sidecar) (by Kyle Kelley)—Jupyter sidecar in your terminal
 - [`tmuxos`](https://github.com/TmuxOS/TmuxOS)—The awesome power of command line is finally revealed.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
