const once = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (arr.lastIndexOf(item) === arr.indexOf(item)) res.push(item);
  });
  // console.log(res);
  return res;
};
// once([1, 2, 3, 4, 12, 4, 1, 2, 4, 5, 6, 8658, 8658]);

const fn = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (arr.lastIndexOf(item) !== arr.indexOf(item))
      if (!res.includes(item)) {
        res.push(item);
      }
  });
  console.log(res);
};
// fn([1, 2, 3, 2, 1, 1, 1, 1]);

const singleNumber = (nums) => nums.reduce((pre, cur) => pre ^ cur);
let eea = singleNumber([4, 1, 2, 1, 2, 4]);
console.log([4, 1, 1] ^ 1);
