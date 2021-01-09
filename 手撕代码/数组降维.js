const arr = [2, 5, [7, 8, [2, 3, 1, [3, 9, 8, [2, 8]]]]];
// Es6
let res = flat(arr);
console.log(res);

console.log(
  arr
    .join(",")
    .split(",")
    .map((item) => Number(item))
);

function flat(arr) {
  let res = [];
  for (const item of arr) {
    item instanceof Array ? (res = res.concat(flat(item))) : res.push(item);
  }
  return res;
}
console.log(flat(arr));

function _flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(cur instanceof Array ? _flat(cur) : cur);
  }, []);
}
console.log(_flat(arr));

function __flat(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(__flat(arr));

function flatten(arr) {
  return arr.valueOf();
}
let res = [];

function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  console.log(res);
}
flat(arr);

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
