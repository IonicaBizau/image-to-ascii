"use strict";

// Dependencies
const imageToAscii = require("../lib");

imageToAscii("https://octodex.github.com/images/jetpacktocat.png", (err, converted) => {
    console.log(err || converted);
});
