function map(arr, callback) {
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== "function") {
    return [];
  } else {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i], i, arr);
    }
    return res;
  }
}

Array.prototype.map1 = function (fn, ret = this) {
  let arr = [];
  for (let i = 0; i < ret.length; i++) {
    arr.push(fn(ret[i], i, ret));
  }
  return arr;
};
let xxx = [1, 2, 3].map1((item, index, array) => {
  console.log(item, index, array);
  return item * 2;
});
console.log("xxx", xxx);
