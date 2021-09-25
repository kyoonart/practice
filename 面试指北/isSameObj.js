// 思路， 不保证代码正确
// const objIsEq = (obj1, obj2) => {
//   if (obj1 instanceof Object && obj2 instanceof Object) {
//     const keys = Object.keys(obj1);
//     // 递归判断
//     return keys.every((key) => objIsEq(obj1[key], obj2[key]));
//   }
//   if (obj1 === obj2) {
//     return true;
//   }
//   return false;
// };

new Promise((resolve, reject) => {
  console.log(1);
  resolve();
})
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });
new Promise((resolve, reject) => {
  console.log(4);
  resolve();
})
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
