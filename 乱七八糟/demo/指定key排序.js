let arr = [
  { id: 2, value: 299 },
  { id: 6, value: 123 },
  { id: 5, value: 5 },
  { id: 0, value: 1 },
];
const fn = (arr, key) => {
  let result = [];
  let list = arr.reduce((pre, cur) => {
    pre[cur[key]] = cur;
    return pre;
  }, {});
  let res = [...Object.keys(list)].map((item) => +item).sort((a, b) => a - b);
  res.forEach((key) => {
    result.push(list[key]);
  });
  return result;
};
// let rs = fn(arr, "value");
// console.log(rs);

let obj = {};
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  obj[element.id] = element;
}

console.log(obj);
