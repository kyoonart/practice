// function sum(...args) {
//   var fn = function (...fnArgs) {
//     return sum.apply(null, args.concat(fnArgs));
//   };
//   fn.toString = function () {
//     return args.reduce(function (a, b) {
//       return a + b;
//     });
//   };
//   return fn;
// }
// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5
// const sum = function (a) {
//   return (b) => {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

const sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    else return a;
  };
};
// console.log(sum(3)(4)(1)(4)()); //8
var removeDuplicates = function (S) {
  var str = S;
  const reg = /([a-z])\1/g;
  while (str.match(reg)) {
    str = str.replace(reg, "");
  }
  console.log(str);
  return str;
};
// removeDuplicates("abbaca");
// 数组的深度

let arr = [1, [23, [4, [2]]]];
let max = 0;
function getArrayDepth(arr, depth = 0) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      max = Math.max(max, depth + 1);
      getArrayDepth(arr[i], depth + 1);
    }
  }
  return max;
}
let r = getArrayDepth(arr);
console.log("r = ", r);

Array.prototype.myMap = function (callback) {
  let arr = this;
  let res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i, arr));
  }
  return res;
};
let rs = [1, 3, 5].myMap((item) => item * 2);
console.log("r = ", rs);
