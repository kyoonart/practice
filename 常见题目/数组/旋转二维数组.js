let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const revortArr = arr => {
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
console.log('res: ', res);
// 螺旋矩阵
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const count = m * n;
  const positions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const ans = [];
  let d = 0;
  let row = 0,
    col = -1;
  while (ans.length < count) {
    const rowNext = row + positions[d][0];
    const colNext = col + positions[d][1];
    console.log('rowNext', rowNext);
    if (
      rowNext === m ||
      rowNext < 0 ||
      colNext === n ||
      colNext < 0 ||
      matrix[rowNext][colNext] === ''
    ) {
      d = (d + 1) % positions.length;
      continue;
    }
    ans.push(matrix[rowNext][colNext]);
    matrix[rowNext][colNext] = '';
    row = rowNext;
    col = colNext;
  }
  console.log('xx', ans);
  return ans;
};
spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
