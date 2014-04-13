var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
        multiplyWidth: 1
    })
  ;

myImage.convert(__dirname + "/heisencat.png", function(err, converted) {
    console.log(err || converted);
});
