"use strict";

const ul = require("ul")
    , imgpx = require("imgpx")
    , oneByOne = require("one-by-one")
    , lwipify = require("lwipify")
    , asciifyPixelArray = require("ansiify-pixel-array")
    ;


const DEFAULTS = {
    pixels: " .,:;i1tfLCG08@"
  , pxWidth: 2
  , reverse: false
  , colored: true
  , aRatio: false
  , size: {
        height: "100%"
    }
};

module.exports = function imagetToAscii (source, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    options = ul.deepMerge(options, module.exports.defaults);
    if (typeof options.pixels === "string") {
        options.pixels = options.pixels.split("");
    }

    // Handle pxWidth
    if (options.pxWidth) {
        aPixels = aPixels.map(function (c) {
            return Array.apply(
                null, new Array(options.pxWidth)
            ).map(function () { return c; });
        });
    }

    // Reverse pixels
    if (options.reverse) {
        options.pixels.reverse();
    }

    OneByOne([
        lwipify.bind(this, source)
      , function (next, img) {
            if (err) { return callback(err); }
            var newSize = Util.computeSize(options.size, {
                width: img.width()
              , height: img.height()
            }, options.pxWidth);
            imgpx(img, {
                resize: newSize
              , image_type: options.image_type
            }, next);
        }
      , function (next, pixels) {
            pixels = ansiifyPixelArray(pixels);
        }
    ], callback);
};

module.exports.defaults = DEFAULTS;
