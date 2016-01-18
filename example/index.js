// Dependencies
const imageToAscii = require("../lib");

// Convert to ascii this image
imageToAscii(`${__dirname}/octocat.png`, function(err, converted) {
    console.log(err || converted);
});

imageToAscii(`https://octodex.github.com/images/hanukkat.png`, function(err, converted) {
    console.log(err || converted);
});
