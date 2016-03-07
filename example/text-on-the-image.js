"use strict";

const imageToAscii = require("../lib")
    , stringify = require("asciify-pixel-matrix")
    ;

imageToAscii("https://octodex.github.com/images/baracktocat.jpg", {
    bg: true
  , fg: false
  , stringify: false
  , concat: false
}, (err, converted) => {
    var snip = "Yes we code! ";
    var i = 0;
    converted.forEach(cRow => {
        cRow.forEach(px => {
            px.char = snip[i = ++i % snip.length];
        });
    });
    console.log(stringify.stringifyMatrix(converted));
});
