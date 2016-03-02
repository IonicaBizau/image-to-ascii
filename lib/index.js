"use strict";

const ul = require("ul")
    , imgpx = require("imgpx")
    , oneByOne = require("one-by-one")
    , ImageParser = require("image-parser")
    , asciifyPixelMatrix = require("asciify-pixel-matrix")
    , computeSize = require("compute-size")
    ;

const DEFAULTS = {
   size_options: {
        px_size: {
            width: 2
        }
    }
  , stringify: true
  , concat: true
  , size: {
        height: "100%"
    }
};

/**
 * ImageToAscii
 * Converts the provided image in ASCII art.
 *
 * @name ImageToAscii
 * @function
 * @param {String} source The path/url to the image.
 * @param {Object|String} options The path to the image or an object containing the following fields:
 *
 *  - **TODO** These are outdated.
 *  - `pixels` (String|Array): The pixels that will be used to render the ASCII image (default: `" .,:;i1tfLCG08@"`).
 *  - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
 *  - `reverse` (Boolean): If `true`, the pixels will be reversed (default: `false`).
 *  - `colored` (Boolean): If `true`, the result will be colored (default: `true`).
 *  - `aRatio` (Boolean): If `true`, the aspect ratio will be kept (default: `false`).
 *  - `imageMagick` (Boolean): If `true`, ImageMagick will be used instead of `GraphicsMagick` (default: `false`).
 *  - `size` (Object): The size of the result image (ASCII art):
 *     - `height` (Number|String): The height value (default: `"100%"`).
 *     - `width` (Number|String): The width value (default: computed value to keep aspect ratio).
 *
 * @param {Function} callback The callback function.
 */
module.exports = function imagetToAscii (source, options, callback) {

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
      , (next, pixels) => next(null, asciifyPixelMatrix(pixels, options))
    ], function (err, data) {
        if (err) { return callback(err); }
        callback(null, data.slice(-1)[0]);
    });
};

module.exports.defaults = DEFAULTS;
