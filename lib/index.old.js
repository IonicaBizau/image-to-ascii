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
 *  - `imageMagick` (Boolean): If `true`, ImageMagick will be used instead of `GraphicsMagick` (default: `false`).
 *  - `size` (Object): The size of the result image (ASCII art):
 *     - `height` (Number|String): The height value (default: `"100%"`).
 *     - `width` (Number|String): The width value (default: computed value to keep aspect ratio).
 *
 * @param {Function} callback The callback function.
 */
var ImageToAscii = module.exports = function (options, callback) {










































    var precision = 1020 / (options.pixels.length - 1)
      , aPixels = options.pixels
      , cPixel = ""
      ;

                    cpx = image.getPixel(x, y);
                    value = cpx.r + cpx.g + cpx.b;
                    strPx = options.pixels[Math.round(value / precision)];

                    // Colored
                    if (options.colored) {
                        strPx = Couleurs.fg(strPx, rgba.r, rgba.g, rgba.a);
                    }

                    converted += strPx;
            converted = converted.split("\n").map(function (c) {
                return c.replace(/\u001b\[0m/g, "") + "\u001b[0m";
            }).join("\n");
            next(null, converted);
        }
    ]
};
