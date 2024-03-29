function sum(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}
// console.log(sum(1)(3)(1));

// function add(x) {
//   let sum = 0;
//   sum += x;
//   return function temp(b) {
//     if (arguments.length == 0) {
//       return sum;
//     } else {
//       sum += b;
//       return temp;
//     }
//   };
// }
// let sumx = add(1)(2)(3);
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
  let fn = function () {
    return addx.apply(null, args.concat([...arguments]));
  };
  fn.toString = () => args.reduce((pre, cur) => pre * cur);
  return fn;
}
// let a = addx(1)(2, 4)(3, 5);

// 不定参数
function curry(func) {
  return function curried(...args) {
    if (func.length <= args.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 定参数时
function curry(a) {
  let args = a;
  function sum(b) {
    args += b;
    return sum;
  }
  sum.toString = function () {
    return args;
  };
  return sum;
}

// const add = (...args) => {
//   console.log("args", args);
//   const addFn = (args) => {
//     return args.reduce((p, c) => p + c, 0);
//   };
//   const fn = function (...addition) {
//     let concatArgs = args.concat(addition);
//     return add(...concatArgs);
//   };
//   fn.sumOf = function () {
//     console.log(addFn(args));
//   };
//   return fn;
// };

const add = (...args) => {
  console.log("args", args);
  const addFn = (args) => args.reduce((prev, cur) => prev + cur, 0);
  const fn = (...args2) => {
    let conArgs = args.concat(args2);
    return add(...conArgs);
  };
  fn.sumOf = () => console.log("res", addFn(args));
  return fn;
};
add(1, 2, 3).sumOf();
add(1)(2)(3).sumOf();
// add(1, 2)(3).sumOf();
// add(4, 5)(1)(2, 3).sumOf();
// add(1, 1)(3)(6).sumOf();
