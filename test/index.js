var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
        resize: {
            height: "100%"
          , width:  "50%"
        }
      , multiplyWidth: 1
      , colored: true
    })
  ;

myImage.convert("https://octodex.github.com/images/baracktocat.jpg", function(err, converted) {
    console.log(err || converted);
});
