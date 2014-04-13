var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ()
  ;

myImage.convert(__dirname + "/heisencat.png", function(err, converted) {
    console.log(err || converted);
});
