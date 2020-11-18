function _instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype;
    // 获得对象的原型
    left = left.__proto__
        // 判断对象的类型是否等于类型的原型
    while (left) {
        if (left === null) { return false };
        if (prototype === left) { return true };
        left = left.__proto__;
    }
}
var a = 'a';
console.log(_instanceof(a, String));
/**
* @param {left} Object 实例对象
* @param {right} Function 构造函数
*/
function myInstanceof (left, right) {
    // 保证运算符右侧是一个构造函数
    if (typeof right !== 'function') {
        throw new Error('运算符右侧必须是一个构造函数')
        return
    }

    // 如果运算符左侧是一个null或者基本数据类型的值，直接返回false 
    if (left === null || !['function', 'object'].includes(typeof left)) {
        return false
    }

    // 只要该构造函数的原型对象出现在实例对象的原型链上，则返回true，否则返回false
    let proto = Object.getPrototypeOf(left)
    while (true) {

        // 遍历完了目标对象的原型链都没找到那就是没有，即到了Object.prototype

        if (proto === null) return false

        // 找到了
        if (proto === right.prototype) return true

        // 沿着原型链继续向上找
        proto = Object.getPrototypeOf(proto)
    }
}
