var ImageToAscii = require("../lib");

ImageToAscii(__dirname + "/out.jpeg", function(err, converted) {
    console.log(err || converted);
});
