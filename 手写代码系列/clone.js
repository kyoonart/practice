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
let a = {
    a: 3,
    b: function() {
        console.log('xxx');
        let c = 222;
    },
    c: {
        a: 2
    }
}
let b = clone(a)
console.log(b);