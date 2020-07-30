function merge( /* obj1, obj2, obj3, ... */ ) {
    var result = {};

    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
        } else if (isArray(val)) {
            result[key] = val.slice();
        } else {
            result[key] = val;
        }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
var obj1 = {
    a: 1,
    b: {
        bb: 11,
        bbb: 111,
    },
};
var obj2 = {
    a: 2,
    b: {
        bb: 22,
    },
};
var mergedObj = merge(obj1, obj2);
console.log(mergeObj);