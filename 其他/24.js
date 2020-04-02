// 简易的深拷贝函数
function cloneDeep1(source) {
    function isObject(obj) {
        return typeof obj === 'object' && obj != null
    }
    // if (!isObject(source)) return source
    var target = Array.isArray(source) ? [] : {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep1(source[key]); // 注意这里
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
var a = {
    name: 'zhangsabn',
    array: [2, 3],
    id: '001',
    children: {
        price: 233
    }
}
var b = cloneDeep1(a)
a.name = 'lisi'
a.children.price = 100
console.log(b);
console.log(a);

// 注意没有把数组考虑进去