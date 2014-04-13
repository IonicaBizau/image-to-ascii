var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ()
  ;

myImage.convert("./heisencat.png", function(err, converted) {
    console.log(err || converted);
});
