// 第五版
// 1、可以指定this
// 2、返回一个函数
// 3、可以传入参数
// 4、柯里化
Function.prototype.bind2 = function(context) {
    // 不是函数抛出错误
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    // var fNOP = function() {};

    var fBound = function() {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
};
// 第三版
Function.prototype.bind2 = function(context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function() {
            var bindArgs = Array.prototype.slice.call(arguments);

            // 注释1
            return self.apply(
                this instanceof fBound ? this : context,
                args.concat(bindArgs)
            );
        }
        // 注释2
    fBound.prototype = this.prototype;
    return fBound;
};
// 注释1：
// 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true，
// 可以让实例获得来自绑定函数的值，即上例中实例会具有 habit 属性。
// 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
// 注释2： 修改返回函数的 prototype 为绑定函数的 prototype，
// 实例就可以继承绑定函数的原型中的值，即上例中 obj 可以获取到 bar 原型上的 friend。