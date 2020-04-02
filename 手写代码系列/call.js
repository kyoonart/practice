Function.prototype.call2 = function(context) {
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this; // foo.fn = bar
    context.fn(); // foo.fn()
    delete context.fn; // delete foo.fn
}

// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}
Function.prototype.callx = function(context) {
    context = context ? Object(context) : window;
    context.fn = this;

    let args = [...arguments].slice(1);
    let result = context.fn(...args);

    delete context.fn
    return result;
}

bar.callx(foo); // 1