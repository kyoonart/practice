Function.prototype.cally = function(context) {
    if (typeof this !== 'function') {
        throw 'error'
    }
    context = context || window;
    context.fn = this; // 这句话的意思是给你绑定的对象上增加一个原函数 并且执行这个函数最后给删除
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    delete context.fn;
    return result;
};
// 防止属性污染
// 在某些情况下，我们可能要为对象添加一个属性，此时就有可能造成属性覆盖，用Symbol作为对象属性可以保证永远不会出现同名属性。
// 例如下面的场景，我们模拟实现一个call方法：
// 我们需要在某个对象上临时调用一个方法， 又不能造成属性污染， Symbol是一个很好的选择。 
Function.prototype.cally = function(context) {
    if (typeof this !== 'function') {
        throw 'error'
    }
    context = context || window;
    const fn = Symbol();
    context[fn] = this; // 这句话的意思是给你绑定的对象上增加一个原函数 并且执行这个函数最后给删除
    let args = [...arguments].slice(1);
    let result = context[fn](...args);
    delete context[fn];
    return result;
};


function _call(context) {
    if (typeof this !== "function") {
        return undefined;
    }
    context = context || window
    context[fn] = this
    let args = [...arguments].slice(1);
    let result = fn(...args)
    delete context[fn]
    return result;
}