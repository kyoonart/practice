const onceHandler = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      res.push(item);
    }
  });
  // console.log(res);
};
onceHandler([2, 2, 2, 4, 5, 1, 6, 7, 8]);

const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
let result = flatten([2, 42, [2, 42, [1, [7, [7]]]]]);
console.log("result", result);
