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
}