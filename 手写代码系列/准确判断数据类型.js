function _instanceof(a) {
    // let a = true
    let res = Object.prototype.toString.call(a);
    let arr = res.substr(8).split('');
    let x = arr.length - 1;
    arr.splice(x, 1);
    return arr.join('')
}
console.log(_instanceof(123));