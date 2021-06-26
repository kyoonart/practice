function getMax(arr) {
  let max = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let res = [];
    for (let j = i - 1; j >= 0; j--) {
      let temp = arr[i] - arr[j];
      res.push(temp);
    }
    max = Math.max(max, ...res);
  }
  return max;
}
let res = getMax([1, 4, 6, 20, 10]);
console.log(res);
