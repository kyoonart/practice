function sum(x) {
    return (y) => {
        return (z) => {
            return x + y + z;
        }
    }
}
// console.log(sum(1)(3)(1));

function add(x) {
    let sum = 0;
    sum += x;
    return function temp(b) {
        if (arguments.length == 0) {
            return sum
        } else {
            sum += b;
            return temp
        }
    }
}
let sumx = add(1)(2)(3)
console.log(sumx());

// function curry(func) {
//     var args = Array.prototype.slice.call(arguments, 1)
//     return function() {
//         var newargs = Array.prototype.slice.call(arguments)
//         return func.apply(this, args.concat(newargs))
//     }
// }

// function add(a, b) {
//     return a + b
// }
// let sum = curry(add, 1)
// console.log(sum(8));