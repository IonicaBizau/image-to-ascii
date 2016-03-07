"use strict";

const imageToAscii = require("../lib");

imageToAscii("https://octodex.github.com/images/octofez.png", {
    bg: true
}, (err, converted) => {
    console.log(err || converted);
});
