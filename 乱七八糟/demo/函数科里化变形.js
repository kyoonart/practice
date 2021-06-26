// const sum = function (a) {
//   return (b) => {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };
// console.log(sum(3)(4)(1, 2)()); //8

function add(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}

function sum(...args) {
  return (...newArgs) => {
    if (newArgs.length === 0) {
      return add(args);
    } else {
      return sum(...args, ...newArgs);
    }
  };
}
// console.log(sum(3, 5)(4)(2, 1)(5)(3)()); //23

// let res = [1, 2, 3].reduce((pre, cur) => pre + cur);
// console.log(res);

function Sum(...args) {
  return function (...newArgs) {
    if (newArgs.length === 0) {
      return args.reduce((a, b) => a + b);
    } else {
      return sum(...args, ...newArgs);
    }
  };
}
// important!!!
function sum() {
  let arg = Array.prototype.slice.call(arguments);
  let fn = function () {
    let args = Array.prototype.slice.call(arguments);
    if (!args.length) return arg.reduce((a, b) => a * b);
    arg = arg.concat(...args);
    return fn;
  };
  fn.toString = function () {
    return arg.reduce((pre, cur) => pre + cur);
  };
  return fn;
}
let ress = sum(3, 5)(4)(2, 1)(5)(3);

console.log("res++", ress);
// curry

function curry(fns) {
  return function curried(...args) {
    if (args.length === fns.length) {
      return fns.apply(this, args);
    } else {
      return function (...arg) {
        return curried.apply(this, args.concat(...arg));
      };
    }
  };
}

// chunks

function chunks(arr, size) {
  let res = [];
  let k = 0;
  while (k < arr.length) {
    res.push({ file: arr.slice(k, k + size) });
    k += size;
  }
  return res;
}

function ns() {
  return [{ name: "pt" }, { age: 18 }];
}
const [name, age] = ns();
console.log("name", name, "age", age);
