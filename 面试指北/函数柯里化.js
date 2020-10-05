function sum(x) {
    return (y) => {
        return (z) => {
            return x + y + z;
        };
    };
}
// console.log(sum(1)(3)(1));

function add(x) {
    let sum = 0;
    sum += x;
    return function temp(b) {
        if (arguments.length == 0) {
            return sum;
        } else {
            sum += b;
            return temp;
        }
    };
}
let sumx = add(1)(2)(3);
// console.log(sumx());

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

// 无限累加函数

// function add(a) {
//     function sum(b) {
//         a = b ? a + b ? a
//         return sum;
//     }
//     sum.toString = function() {
//         return a
//     }
//     return sum;
// }
// 科里化实现多参数
function addx() {
    // 1:取出所有的参数
    let args = [...arguments];
    console.log(args);
    let fn = function() {
        console.log('done');
        return addx.apply(null, args.concat([...arguments]));
    };
    fn.toString = () => args.reduce((pre, cur) => pre * cur);
    return fn;
}
let a = addx(1)(2, 4)(3, 5);
console.log(a());