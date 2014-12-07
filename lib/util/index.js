var Util = module.exports = {};

Util.mergeRecursive = function MergeRecursive (obj1, obj2) {
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

Util.percent = function (v, s) {
    var value = parseInt(v);
    if (isNaN(value)) {
        return 0;
    }
    if (typeof v === "string" && v.slice(-1) === "%")
        return Math.floor(value * s / 100) - 1;
    return value;
}

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
    result.width = result.height * rSize.width * pxW / rSize.height;

    return result;
};
