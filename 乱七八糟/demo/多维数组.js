const fn = (N = 3) =>
  [...new Array(N)].map((el, j) => [
    ...new Array(N).fill(0).map((el, i) => (j == 0 ? i + 1 : j * N + i + 1)),
  ]);
let res = fn(9);
// let len = fn().length;
// for (let i = 0; i < len; i++) {
//   for (let j = 0; j < len; j++) {
//     res[i][j] = i === 0 ? j + 1 : i * len + j + 1;
//   }
// }
// console.log(res);

const findMaxRightWithStack = (arr) => {
  let res = [];
  let stack = [];
  let index = 0;
  stack.push(0);
  while (index < arr.length) {
    if (stack.length - 1 && arr[index] > arr[stack[stack.length - 1]]) {
      res[stack.pop()] = arr[index];
    } else {
      stack.push(index);
      index++;
    }
  }
  while (stack.length) {
    res[stack.pop()] = -1;
  }
  console.log(res);
  return res;
};
findMaxRightWithStack([19, 5, 399, 6, 4, 8, 9, 10]);
