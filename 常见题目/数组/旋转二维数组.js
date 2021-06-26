let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const revortArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reverse();
  }
  return arr;
};
let res = revortArr(arr);
console.log("res: ", res);
