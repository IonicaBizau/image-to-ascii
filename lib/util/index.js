// Dependencies
var Tmp = require("tmp");

// Constructor
var Util = module.exports = {};

/**
 * MergeRecursive
 * Merges two objects.
 *
 * @name MergeRecursive
 * @function
 * @param {Object} obj1 The first object.
 * @param {Object} obj2 The second object.
 * @return {Object} The merged objects.
 */
Util.mergeRecursive = function MergeRecursive (obj1, obj2) {
    obj1 = JSON.parse(JSON.stringify(obj1));
    obj2 = JSON.parse(JSON.stringify(obj2));
    for (var p in obj2) {
        try {
            if (obj2[p].constructor == Object) {
                obj1[p] = Util.mergeRecursive(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            obj1[p] = obj2[p];
        }
    }

    return obj1;
};

/**
 * percent
 * Returns the percent value from a number.
 *
 * @name percent
 * @function
 * @param {Number|String} v The percent value (if string).
 * @param {Number} s The value where percent value will be extracted from.
 * @return {Number} The result value.
 */
Util.percent = function (v, s) {
    var value = parseInt(v);
    if (isNaN(value)) {
        return 0;
    }
    if (typeof v === "string" && v.slice(-1) === "%")
        return Math.floor(value * s / 100) - 1;
    return value;
}

/**
 * computeSize
 * Computes the image result size.
 *
 * @name computeSize
 * @function
 * @param {Object} pSize The provided size object.
 * @param {Object} rSize The real size object of the image.
 * @param {Number} pxW The pixel width value.
 * @return {Object} The result size object.
 */
Util.computeSize = function (pSize, rSize, pxW) {

    var result = {
            width: pSize.width || rSize.width
          , height: pSize.height || rSize.height
        }
      , screenSize = {
            width: process.stdout.columns || 239
          , height: process.stdout.rows || 60
        }
      ;

    result.width = Util.percent(pSize.width, screenSize.width, pxW);
    result.height = Util.percent(pSize.height, screenSize.height, pxW);
    if (result.width === 0) {
        result.width = result.height * rSize.width * pxW / rSize.height;
    }

    if (result.width > screenSize.width) {
        return Util.computeSize({ width: "100%", height: "100%" }, rSize, pxW);
    }

    return result;
};

/**
 * createTempFile
 * Creates a temporary file with a given file extension
 *
 * @name createTempFile
 * @function
 * @param {String} fileExtension The file extension, without a dot.
 * @param {Function} callback The callback function.
 */
Util.createTempFile = function (fileExtension, callback) {
    Tmp.file({postfix: "." + fileExtension}, callback);
};
