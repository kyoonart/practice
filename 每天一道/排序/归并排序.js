// function mergeSort(arr) {
//   let len = arr.length;
//   if (len < 2) return arr;
//   let mid = Math.floor(len / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }
// function merge(left, right) {
//   let result = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) result.push(left.shift());
//   while (right.length) result.push(right.shift());
//   return result;
// }

function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) res.push(left.shift());
    else res.push(right.shift());
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
}
// var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37];
// var res = mergeSort(arr);
// console.log(arr, res);

function merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) res.push(left.shift());
    else res.push(right.shift());
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
}
let res = merge([1, 3, 5], [2, 4, 6]);
console.log(res);

function merge(left, right) {
  let res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) res.push(left[0]);
    else res.push(right[0]);
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
}
