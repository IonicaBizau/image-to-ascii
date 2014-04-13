// dependencies
var fs = require('fs')
  , PNG = require('pngjs').PNG
  , ImageMagick = require("imagemagick")
  ;

/**
 *  This function parses the resize object
 *
 */
function processResize (resize) {

    // initialize the value that will be
    var finalResize = "";

    // width is provided
    if (typeof resize.width === "string") {

        // parse integer
        var value = parseInt (resize.width);

        // handle percent values
        if (resize.width.slice(-1) === "%") {
            value = Math.floor(value * process.stdout.columns / 100);
        }

        // append the width value
        finalResize += value + "x";
    }

    // height is provided
    if (typeof resize.height === "string") {

        // parse integer
        var value = parseInt (resize.height);

        // handle percent values
        if (resize.height.slice(-1) === "%") {
            value = Math.floor(value * process.stdout.rows / 100);
        }

        if (!finalResize) {
            finalResize += "x";
        }

        // append the height
        finalResize += value;

        // both width and height were provided, don't keep aspect ratio
        if (finalResize.split("x")[0]) {
            finalResize += "!";
        }
    }

    // finally return the final resize
    return finalResize;
}

/**
 *  This function converts the image from options.imagePath to a png format.
 *
 */
function convertToPng (options, callback) {

    // force resize to be an object
    options.resize = Object(options.resize);

    // options that will be passed to convert function
    var tmpPath = "image-" + Math.random().toString(36) + ".png";

    // get the image size
    ImageMagick.identify(options.imagePath, function (err, imageData){

        // handle error
        if (err) { return callback (err); }

        // build the resize options
        resizeOptions = processResize (options.resize) || (imageData.width + "x" + imageData.height);

        // convert the image
        ImageMagick.convert([
            options.imagePath
          , '-resize'
          , resizeOptions
          , tmpPath
        ], function(err, stdout){

            // handle error
            if (err) { return callback (err); }

            // callback
            callback (null, tmpPath);
        });
    });
}

/**
 *  ImageToAscii
 *  Convert images to ASCII art strings.
 *
 *  ===============================
 *  Licensed under the MIT license:
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Ionică Bizău
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */
var ImageToAscii = function (options) {

    // use 'new'
    if (this.constructor !== ImageToAscii) {
        throw new Error ("Use 'new' keyword to create the ImageToAscii instance");
    }

    // force options to be an object
    options = Object (options);
    options.pixels = (String(options.pixels || "") || " .,:;i1tfLCG08@").split("");
    options.multiplyWidth = Number (options.multiplyWidth) || 2;

    // globals
    var precision = 1020 / (options.pixels.length - 1)
      , asciiPixels = options.pixels
      ;

    // reverse pixels
    if (options.reverse) {
        options.pixels.reverse();
    }

    // multiply width
    if (options.multiplyWidth) {

        // empty the asciiPixels array
        asciiPixels = [];

        // aspect ratio fix
        for (var i = 0; i < options.pixels.length; ++i) {

            // how many times we need to multiply the pixel
            for (var ii = 0, cPixel = ""; ii < options.multiplyWidth; ++ii) {
                cPixel += options.pixels[i];
            }

            // push the pixel
            asciiPixels.push(cPixel);
        }
    }

    return {
        /**
         *  ImageToAscii#convert
         *  Converts a png image to ASCII art
         *
         *  Arguments
         *    @imagePath: the path to the PNG image
         *    @callback: the callback function
         *
         */
        convert: function (imagePath, callback) {

            // force image path to be a string
            imagePath = String (imagePath);

            // force callback to be a function
            callback = callback || function () {};
            if (typeof callback !== "function") {
                throw new Error ("Callback must be a function");
            }

            // convert to png and resize
            convertToPng ({
                imagePath: imagePath
              , resize: options.resize
            }, function (err, tmpPath) {

                // handle error
                if (err) { return callback (err); }

                // read the image
                var stream = fs.createReadStream(tmpPath).pipe(new PNG({ filterType: 4 }));

                // image parsed
                stream.on("parsed", function () {

                    // each pixel
                    for (var y = 0, converted = ""; y < this.height; y++) {
                        for (var x = 0; x < this.width; x++) {

                            // get the index, the sum of rgb and build the ASCII pixel
                            var idx = (this.width * y + x) << 2
                              , value = this.data[idx] + this.data[idx + 1] + this.data[idx + 2] + this.data[idx + 3]
                              , thisPixel = asciiPixels[Math.round(value / precision)]
                              ;

                            // add the new pixel to the image
                            converted += thisPixel;
                        }

                        // add new line
                        converted += "\n";
                    }

                    // if the image
                    if (imagePath !== tmpPath) {
                        fs.unlink (tmpPath);
                    }

                    callback (null, converted);
                });
            });
        }
    }
};

module.exports = ImageToAscii;
