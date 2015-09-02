// Dependencies
var ImageToAscii = require("../lib");

// Convert to ascii this image
ImageToAscii(__dirname + "/out.jpeg", function(err, converted) {
    console.log(err || converted);
});
