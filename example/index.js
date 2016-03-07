"use strict";

// Dependencies
const imageToAscii = require("../lib");

imageToAscii("https://octodex.github.com/images/octofez.png", (err, converted) => {
    console.log(err || converted);
});
