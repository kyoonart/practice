function count() {
  let n = 0;
  return () => {
    if (n % 2 === 0) n = 0;
    return n++;
  };
}
// let res = count();
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());

function twoSum(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([i, j]);
      }
    }
  }
  return res;
}

let res = twoSum([1, 2, 4, 6], 10);
console.log(res);
