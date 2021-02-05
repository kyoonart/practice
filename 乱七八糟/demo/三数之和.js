/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let nums = [-1, 0, 1, 2, -1, -4, 0, 0, 0];
// var threeSum = function (nums) {
//   let res = [];
//   let map = {};
//   let ins = [];
//   nums = nums.sort((a, b) => a - b);
//   console.log("nums", nums);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > 0) break;
//       for (let k = nums.length - 1; k > j; k--) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           res.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   res.forEach((r) => (map[r] ? map[r]++ : (map[r] = 1)));
//   Object.keys(map).forEach((k) => {
//     let v = k.split(",").map((y) => Number(y));
//     ins.push([...v]);
//   });
//   console.log(ins);
//   return ins;
// };
// 暴力方法无法通过(超时) 双指针法通过

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i >= 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j - 1] === nums[j]) {
          j++;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  console.log(res);
  return res;
};
// var threeSum = function (nums) {
//   let res = [];
//   let hash = {};
//   for (let i = 0; i < nums.length - 2; i++) {
//     // 每个人
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       // 依次拉上其他每个人
//       if (hash[nums[j]] !== undefined) {
//         // 已经有合适自己的两人组
//         res.push([nums[j]].concat(hash[nums[j]]));
//         hash[nums[j]] = undefined;
//       } else {
//         // 没有合适自己的两人组
//         let mark = 0 - nums[i] - nums[j];
//         hash[mark] = [nums[i], nums[j]];
//       }
//     }
//   }
//   console.log(res);
//   return res;
// }; // 示意代码 未AC

threeSum(nums);
