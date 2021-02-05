const once = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (arr.lastIndexOf(item) === arr.indexOf(item)) res.push(item);
  });
  console.log(res);
  return res;
};
once([1, 2, 3, 4, 12, 4, 1, 2, 4, 5, 6, 8658, 8658]);
