var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ({
        resize: {
            height: "100%"
        }
      , colored: true
    })
  ;

myImage.convert(__dirname + "/octocat.png", function(err, converted) {
    process.stdout.cursorTo(0, 0);
    process.stdout.write(converted);
});
