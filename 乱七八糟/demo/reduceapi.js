let arr = [1, 2, 3, 4];
// arr.reduce((pre, cur, i, arr) => {
//   console.log("pre", pre);
//   console.log("cur", cur);
//   console.log("arr", arr);
//   console.log("i", i);
// }, 90);

// console.log(arr.slice(0, 2));
// console.log(arr);

const selfMap = function (fn) {
  const arr = Array.prototype.slice.call(this);
  return arr.reduce((pre, cur, i) => {
    return [...pre, fn.call(this, cur)];
  }, []);
};

Array.prototype.selfMap = selfMap;
var arr1 = [1, 2, 3];
// arr1.length = 5;

let arrMap = arr1.selfMap(function (x) {
  return x * 2;
});
console.log(arrMap);
// [2, 4, 6]
