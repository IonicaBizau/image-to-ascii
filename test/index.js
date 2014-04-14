var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
        resize: {
            height: "100%"
          , width:  "50%"
          , colored: true
        }
      , multiplyWidth: 1
    })
  ;

myImage.convert(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
