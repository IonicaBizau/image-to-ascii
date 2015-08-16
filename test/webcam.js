var ImageToAscii = require("../lib/index");

ImageToAscii(__dirname + "/out.jpeg", function(err, converted) {
    console.log(err || converted);
});
