var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
        resize: "h"
    })
  ;

myImage.convert(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
