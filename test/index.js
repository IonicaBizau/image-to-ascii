var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
        resize: {
            height: "80%"
          , width: "50%"
        }
    })
  ;

myImage.convert(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
