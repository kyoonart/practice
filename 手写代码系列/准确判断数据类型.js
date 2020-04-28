function _type(obj) {
    let res = Object.prototype.toString.call(obj);
    let arr = res.substr(8).split('');
    let x = arr.length - 1;
    arr.splice(x, 1);
    return arr.join('')
}
let a = {
    a: 5
}
let x = function() {}
console.log(_type(a));
console.log(typeof(a));
console.log(_type(x));
console.log(typeof(x));