// function unique(arr) {
//   let result = [];
//   arr.forEach((item) => {
//     !result.includes(item) && result.push(item);
//   });
//   console.log(result);
// }

function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log(result);
}
let arr = [1, 1, 12, 4242, 4242];
// console.log(unique(arr));

const add = function (a) {
  let sum = a;
  let temp = function (b) {
    sum += b;
    return temp;
  };
  temp.toString = function () {
    return sum;
  };
  return temp;
};

let res = add(1)(2)(3);
console.log(res);

function curry(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
