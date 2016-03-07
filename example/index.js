"use strict";

// Dependencies
const imageToAscii = require("../lib");

// The path can be either a local path or an url
imageToAscii("https://octodex.github.com/images/octofez.png", (err, converted) => {
    console.log(err || converted);
});

// Passing options
imageToAscii("https://octodex.github.com/images/privateinvestocat.jpg", {
    colored: false
}, (err, converted) => {
    console.log(err || converted);
});
