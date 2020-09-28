const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};
// 浅拷贝 最简单 JSON.parse(JSON.stringify())
function clone(target) {
    let cloneTarget = {};
    for (const key in target) {
        cloneTarget[key] = target[key]
    }
    return cloneTarget;
}
//  深拷贝  递归  解决了数组问题但没有解决循环引用问题  可以拷贝函数
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};
console.log(clone(target));

// var o = {};
// console.log(Deepcopy(o, target));
//  函数问题没有解决  
function Deepcopy(newobj, obj) {
    for (var key in obj) {
        var item = obj[key]; //先拿到对象的值
        if (item instanceof Array) {
            // 属于数组类型
            newobj[key] = [];
            Deepcopy(newobj[key], item)
        } else if (item instanceof Object) {
            // 属于对象类型
            newobj[key] = {};
            Deepcopy(newobj[key], item)
        } else {
            // 属于简单类型
            newobj[key] = item
        }
    }
    return newobj;
}
// 简易的深拷贝函数
function cloneDeep1(source) {
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

function deepClone(source) {
    let target = Array.isArray(source) ? [] : {};
    for (const key in source) {
        if (object.hasOwnProperty(key)) {
            if (typeof key === 'object') {
                target[key] = deepClone(source[key]);

            } else {
                target[key] = source[key];
            }
        }
    }
    return target
}



const cloneDeep1 = (target, hash = new WeakMap()) => {
    // 对于传入参数处理
    if (typeof target !== 'object' || target === null) {
        return target;
    }
    // 哈希表中存在直接返回
    if (hash.has(target)) return hash.get(target);

    const cloneTarget = Array.isArray(target) ? [] : {};
    hash.set(target, cloneTarget);

    // 针对Symbol属性
    const symKeys = Object.getOwnPropertySymbols(target);
    if (symKeys.length) {
        symKeys.forEach(symKey => {
            if (typeof target[symKey] === 'object' && target[symKey] !== null) {
                cloneTarget[symKey] = cloneDeep1(target[symKey]);
            } else {
                cloneTarget[symKey] = target[symKey];
            }
        })
    }

    for (const i in target) {
        if (Object.prototype.hasOwnProperty.call(target, i)) {
            cloneTarget[i] =
                typeof target[i] === 'object' && target[i] !== null ?
                cloneDeep1(target[i], hash) :
                target[i];
        }
    }
    return cloneTarget;
}