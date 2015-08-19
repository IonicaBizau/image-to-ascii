var ImageToAscii = require("../lib");

ImageToAscii(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
