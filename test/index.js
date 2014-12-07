var ImageToAscii = require("../lib/index");

ImageToAscii(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
