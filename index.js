var fs = require('fs')
  , PNG = require('pngjs').PNG
  , pixels = ("@80GCLft1i;:,. ").split("").reverse()
  , precision = 765 / (pixels.length - 1)
  , asciiPixels = []
  ;

for (var i = 0; i < pixels.length; ++i) {
    asciiPixels.push(pixels[i] + pixels[i]);
}

fs.createReadStream('./2864371.png').pipe(new PNG({ filterType: 4 })).on('parsed', function() {

    for (var y = 0, converted; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var idx = (this.width * y + x) << 2
              , value = this.data[idx] + this.data[idx + 1] + this.data[idx + 2]
              , thisPixel = asciiPixels[Math.round(value / precision)]
              ;

            converted += thisPixel;
        }

        converted += "\n";
    }

    console.log(converted);
});
