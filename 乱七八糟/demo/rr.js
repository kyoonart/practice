function get(ele) {
  this.on = function (classname, type, fn) {
    [...ele.querySelectorAll(classname)].forEach((item) =>
      item.addEventListener(type, () => fn())
    );
  };
  this.off = function (classname, type, fn) {
    [...ele.querySelectorAll(classname)].forEach((item) =>
      item.removeEventListener(type, () => fn())
    );
  };
}

// const add = function (a) {
//   let sum = a;
//   let temp = function (b) {
//     sum += b;
//     return temp;
//   };
//   temp.toString = function () {
//     return sum;
//   };
//   return temp;
// };

// let res = add(1, 3, 4);
// console.log(res.toString());

function multiply() {
  let arg = Array.prototype.slice.call(arguments);
  let fn = function () {
    arg.push(...Array.prototype.slice.call(arguments));
    return fn;
  };
  fn.toString = () => arg.reduce((pre, cur) => pre * cur);
  return fn;
}
// let res = multiply(1, 2, 3);
let res = multiply(1, 2, 3)(5);

console.log(res.toString());

// 不限数量参数
function sum(...rest) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);

    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    let sum = _args.reduce(function (a, b) {
      return a + b;
    });
    return sum;
  };
  return _adder;
}

function argsSum(args) {
  return args.reduce((pre, cur) => {
    return pre + cur;
  });
}
function add(...args1) {
  let sum1 = argsSum(args1);
  let fn = function (...args2) {
    let sum2 = argsSum(args2);
    return add(sum1 + sum2);
  };
  fn.toString = function () {
    return sum1;
  };
  return fn;
}
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2, 3)(4)); // 10
console.log(add(1)(2)(3)(4)(5)); // 15
