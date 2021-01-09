// var funcs = [];
// for (var i = 0; i < 10; i++) {
//   funcs.push(
//     (function () {
//       return i;
//     })()
//   );
// }
// funcs.forEach(function (res) {
//   console.log(res);
// });
let arr = [[212, 23, [232, 32], 32], [232]];
function flat(arr) {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

// let res = flat(arr);
// console.log(res);

function flat1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

let res = flat1(arr);
console.log(res);
