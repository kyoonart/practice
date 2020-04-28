let arr = [1, 2, 8, 6, 2, 6, 2, 3, 6, 5, 4, 1, 51, 51, 5, 1];

for (let key in arr) {
  console.log(arr[key]); // 会正常打印 1, 2
}
// 但是如果在 Array 原型链上添加一个方法
Array.prototype.test = function () {};

for (let key of arr) {
  console.log(key); // 此时会打印 1, 2, ƒ () {}
}
//  打乱数组？
function shuffle(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let idx = Math.floor(Math.random() * (len - i));
    let temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
}
console.log(shuffle(arr));
