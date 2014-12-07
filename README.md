Image to Ascii
==============
A Node.JS module that converts images to ASCII art.

# Installation
```sh
$ npm install image-to-ascii
```

# Documentation
## `ImageToAscii(options, callback)`
Converts the provided image in ASCII art.

### Params
- **Object|String** `options`: The path to the image or an object containing the following fields:
 - `path` (String): The path to the image.
 - `pixels` (String|Array): The pixels that will be used to render the ASCII image (default: `" .,:;i1tfLCG08@"`).
 - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
 - `reverse` (Boolean): If `true`, the pixels will be reversed (default: `false`).
 - `colored` (Boolean): If `true`, the result will be colored (default: `true`).
 - `aRatio` (Boolean): If `true`, the aspect ratio will be kept (default: `false`).
 - `size` (Object): The size of the result image (ASCII art):
    - `height` (Number|String): The height value (default: `"100%"`).
    - `width` (Number|String): The width value (default: computed value to keep aspect ratio).

- **Function** `callback`: The callback function.


# How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# Changelog
## 1.0.0
 - First stable release.
 - Refactored code.
 - Use Graphics Magick instead of Image Magick.
 - Configuration format changed.

## v0.1.1
 - Added support for remote images.

## v0.1.1
 - Initial release.

# License
See the [LICENSE](./LICENSE) file.
