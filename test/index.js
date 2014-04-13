var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
    })
  ;

myImage.convert(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
