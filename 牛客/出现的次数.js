function count(arr) {
  let res = {};
  const counts = [...new Set([...arr])].length;
  arr.forEach((item) => {
    res[item] ? res[item]++ : (res[item] = 1);
  });
  return {
    counts: counts,
    res: res,
  };
}
let res = count([1, 2, 3, 4, 2, 3, 4]);
console.log(res);
