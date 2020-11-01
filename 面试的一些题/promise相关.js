const promise = new Promise((resolve, reject) => {
    reject(1)
}).catch(() => {
    console.log(2);
}).then(() => console.log(3), v => console.log(v))


function call_(context) {
    context = context ? context : window
    context.fn = this
    let args = [...arguments].slice(1);
    let result = context.fn(...args)
    delete context.fn
    return result;
}

function _new() {
    let obj = new Object()
    let CON = [].slice.call(arguments)
    obj.__proto__ = CON.prototype
    let result = CON.apply(obj, arguments)
    return typeof result === 'object' ? result : obj
}