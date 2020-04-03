Function.prototype.cally = function(context) {
    if (typeof this !== 'function') {
        throw 'error'
    }
    context = context || window;
    context.fn = this;
    let result = ''
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn()
    }
    delete context.fn;
    return result;
}