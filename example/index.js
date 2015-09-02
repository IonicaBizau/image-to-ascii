// Dependencies
var ImageToAscii = require("../lib");

// Convert to ascii this image
ImageToAscii(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
