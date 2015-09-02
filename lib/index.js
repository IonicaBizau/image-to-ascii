// Dependencies
var Gm = require("gm")
  , Fs = require("fs")
  , Png = require("pngjs").PNG
  , Request = require("request")
  , Couleurs = require("couleurs")()
  , Util = require("./util")
  ;

/**
 * ImageToAscii
 * Converts the provided image in ASCII art.
 *
 * @name ImageToAscii
 * @function
 * @param {Object|String} options The path to the image or an object containing the following fields:
 *
 *  - `path` (String): The path to the image.
 *  - `pixels` (String|Array): The pixels that will be used to render the ASCII image (default: `" .,:;i1tfLCG08@"`).
 *  - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
 *  - `reverse` (Boolean): If `true`, the pixels will be reversed (default: `false`).
 *  - `colored` (Boolean): If `true`, the result will be colored (default: `true`).
 *  - `aRatio` (Boolean): If `true`, the aspect ratio will be kept (default: `false`).
 *  - `size` (Object): The size of the result image (ASCII art):
 *     - `height` (Number|String): The height value (default: `"100%"`).
 *     - `width` (Number|String): The width value (default: computed value to keep aspect ratio).
 *
 * @param {Function} callback The callback function.
 */
var ImageToAscii = module.exports = function (options, callback) {

    var self = this;

    if (typeof options === "string") {
        options = {
            path: options
        };
    }

    // Merge defaults options
    self.options = options = Util.mergeRecursive(ImageToAscii.defaults, options);
    callback = callback || function () {};

    // Convert pixels to array
    if (typeof options.pixels === "string") {
        options.pixels = options.pixels.split("");
    }

    // Validate path
    if (typeof options.path !== "string" || !options.path) {
        return callback(new Error("path option should be a non empty string."));
    }

    // Remote image
    if (/^https?:\/\//.test(options.path)) {
        Util.createTempFile("png", function (err, tmpFilePath) {
            if (err) { return callback(err); }
            Request(options.path)
                .pipe(Fs.createWriteStream(tmpFilePath))
                .on("close", function () {
                    options.path = tmpFilePath;
                    ImageToAscii.call(self, options, function (err, data) {
                        callback.call(self, err, data);
                    });
                });
        });
        return;
    }

    var precision = 1020 / (options.pixels.length - 1)
      , aPixels = options.pixels
      , cPixel = ""
      , i = 0
      , ii = 0
      ;

    // Reverse pixels
    if (options.reverse) {
        options.pixels.reverse();
    }

    // Handle pxWidth
    if (options.pxWidth) {
        aPixels = aPixels.map(function (c) {
            return Array.apply(
                null, new Array(options.pxWidth)
            ).map(function () { return c; });
        });
    }

    // Get input image size
    Gm(options.path).size(function (err, size) {
        if (err) { return callback(err); }

        var newSize = Util.computeSize(options.size, size, options.pxWidth);

        Util.createTempFile("png", function (err, tmpFilePath) {
            if (err) { return callback(err); }
            // Convert to png
            Gm(options.path).resize(newSize.width, newSize.height, options.aRatio === false ? "!" : undefined).write(tmpFilePath, function (err) {
                if (err) { return callback(err); }
                var stream = Fs.createReadStream(tmpFilePath).pipe(new Png({ filterType: 4 }))
                  , x = 0
                  , y = 0
                  , converted = ""
                  ;

                stream.on("parsed", function () {
                    for (; y < this.height; y++) {
                        for (x = 0;  x < this.width; x++) {

                            // Compute the current pixel
                            var idx = (this.width * y + x) << 2
                              , rgba = {
                                    r: this.data[idx]
                                  , g: this.data[idx + 1]
                                  , a: this.data[idx + 2]
                                  , o: this.data[idx + 3]
                                }
                              , value = this.data[idx] + this.data[idx + 1] + this.data[idx + 2] + this.data[idx + 3]
                              , thisPixel = options.pixels[Math.round(value / precision)]
                              ;

                            // Colored
                            if (options.colored) {
                                thisPixel = Couleurs.fg(thisPixel, rgba.r, rgba.g, rgba.a);
                            }

                            converted += thisPixel;
                        }
                        converted += "\n";
                    }

                    converted = converted.split("\n").map(function (c) {
                        return c.replace(/\u001b\[0m/g, "") + "\u001b[0m";
                    }).join("\n");

                    callback(null, converted);
                });
            });
        });
    });
};

// Defaults
ImageToAscii.defaults = {
    pixels: " .,:;i1tfLCG08@"
  , pxWidth: 2
  , reverse: false
  , colored: true
  , aRatio: false
  , size: {
        height: "100%"
    }
};
