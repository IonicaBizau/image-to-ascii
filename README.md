Image to ASCII
==============

Node.js module that converts a PNG image to ASCII art.

## How to use

### Constructor: `new ImageToAscii (options)`
`options` is an object containing the following fields:
 - `pixels`: string representing the *ASCII pixels* in the brightness order. If not provided, the default value will be used: `" .,:;i1tfLCG08@"`
 - `multiplyWidth`: the width of the ASCII pixles. For keeping the aspect ratio in terminal, the default value is `2`
 - `reverse`: boolean value that indicates if the `pixels` value must be reversed. Default is `undefined`.

### `.convert (imagePath, callback)`
 - `imagePath`: the path to the PNG image
 - `callback`: the callback function

## Example

```js
var ImageToAscii = require ("../index")
  , myImage = new ImageToAscii ()
  ;

myImage.convert(__dirname + "/octocat.png", function(err, converted) {
    console.log(err || converted);
});
```

## Test

## Changelog

### `v0.1.0`
 - Initial version

## License
See LICENSE file
