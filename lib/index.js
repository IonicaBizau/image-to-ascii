"use strict";

const ul = require("ul")
    , imgpx = require("imgpx")
    , oneByOne = require("one-by-one")
    , ImageParser = require("image-parser")
    , asciifyPixelMatrix = require("asciify-pixel-matrix")
    , computeSize = require("compute-size")
    , charWidth = require("terminal-char-width")
    ;

const DEFAULTS = {
    size_options: {
        px_size: {
            width: 1 / charWidth
        }
    }
  , stringify: true
  , concat: true
  , size: {
        height: "100%"
    }
  , stringify_fn: asciifyPixelMatrix
};

/**
 * imageToAscii
 * Converts the provided image in ASCII art.
 *
 * @name imageToAscii
 * @function
 * @param {String} source The path/url to the image.
 * @param {Object|String} options The path to the image or an object containing
 * the following fields:
 *
 *  **Size Options**:
 *   - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
 *   - `size` (Object): The size of the result image (ASCII art)—interpreted by
 *     [`compute-size`](https://github.com/IonicaBizau/compute-size):
 *     - `height` (Number|String): The height value (default: `"100%"`).
 *     - `width` (Number|String): The width value (default: computed value to
 *        keep aspect ratio). This is optional if the height is provided.
 *   - `size_options` (Object): The options for
 *     [`compute-size`](https://github.com/IonicaBizau/compute-size):
 *     - `screen_size` (Object): The screen size (defaults to terminal width
 *     and height):
 *         - `width` (Number): The screen width.
 *         - `height` (Number): The screen height.
 *     - `px_size` (Object): The pixel size.
 *         - `width` (default: `1`)
 *         - `height` (default: `1`)
 *     - `preserve_aspect_ratio` (Boolean): If `false`, the aspect ratio will
 *       not be preserved (default: `true`).
 *     - `fit_screen` (Boolean): If `false`, the result size will not fit to
 *       screen (default: `true`).
 *
 *  **Matrix asciifier options**:
 *   - `stringify` (Boolean): If `false`, the pixel objects will not be
 *     stringified.
 *   - `concat` (Boolean): If `false`, the pixel objects will not be joined
 *     together.
 *
 *  **Pixel asciifier options**:
 *
 *   - `pixels` (Array|String): An array or string containing the characters
 *      used for converting the pixels in strings
 *      (default: `" .,:;i1tfLCG08@"`).
 *   - `reverse` (Boolean): If `true`, the pixels will be reversed creating a
 *      *negative image* effect (default: `false`).
 *   - `colored` (Boolean): If `true`, the output will contain ANSI styles
 *     (default: `true`).
 *   - `bg` (Boolean): If `true`, the **background** color will be used for
 *     coloring (default: false).
 *   - `fg` (Boolean): If `true`, the **foreground** color will be used for
 *     coloring (default: true).
 *   - `white_bg` (Boolean): Turn on the white background for transparent
 *     pixels (default: `true`).
 *   - `px_background` (Object): An object containing the `r` (red), `g`
 *     (green) and `b` (blue) values of the custom background color.
 *
 *  **Other options**:
 *   - `image_type` (String): Use this to explicitely provide the image type.
 *   - `stringify_fn` (Function): A function getting the `pixels` matrix and
 *     the `options` in the arguments. Use this option to implement your own
 *     stringifier.
 *
 * @param {Function} callback The callback function.
 */
module.exports = function imageToAscii (source, options, callback) {

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    options = ul.deepMerge(options, DEFAULTS);

    oneByOne([
        next => new ImageParser(source).parse(next)
      , (next, img) => {
            var newSize = computeSize(options.size, {
                width: img.width()
              , height: img.height()
            }, options.size_options);
            imgpx(img, {
                resize: [newSize.width, newSize.height]
              , image_type: options.image_type
            }, next);
        }
      , (next, pixels) => next(null, options.stringify_fn(pixels, options))
    ], function (err, data) {
        if (err) { return callback(err); }
        callback(null, data.slice(-1)[0], data[0], data[1]);
    });
};

module.exports.defaults = DEFAULTS;
