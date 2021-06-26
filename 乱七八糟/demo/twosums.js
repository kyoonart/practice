// function twoSum(arr = [1, 4, 5, 1, 25], target = 9) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let rr = target - arr[i];
//     if (obj[rr]) {
//       return [i, obj[rr]];
//     } else {
//       obj[rr] = i;
//     }
//   }
// }

// const twoSum = (arr, target) => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let complete = target - arr[i];
//     if (obj[complete]) {
//       return [obj[complete], i];
//     } else {
//       obj[complete] = i;
//     }
//   }
// };

const twoSum = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let complete = target - arr[i];
    if (obj[complete]) {
      return [obj[complete], i];
    } else obj[arr[i]] = i;
  }
};
// var twoSum = function (nums, target) {
//   let arrs = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (arrs.has(target - nums[i])) {
//       return [arrs.get(target - nums[i]), i];
//     }
//     arrs.set(nums[i], i);
//   }
// };
let re = twoSum([1, 3, 5, 1, 25], 8);
console.log(re);
let es = twoSum([1, 2, 4, 4], 8);
console.log(es);
