let arr = [1, 2, 2, 1, 2, 3, 4, 24, 2, 4];
console.log(arr.indexOf(1));
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
function unique(arr) {
  let res = [];
  for (const item of arr) {
    !res.includes(item) && res.push(item);
  }
  return res;
}
let res = unique(arr);
console.log(res);
