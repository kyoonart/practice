/**
 * @param {number[]} nums
 * @return {number[][]}
 * 题目描述 给定一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */
// 思路 : 先把数组从小到大排序，然后取两个指针一个从i的下一个开始一个从尾部开始 循环过程中记得处理重复字符串 记录下此时的三数之和 指针移动即可
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
    if (i >= 0 && nums[i] === nums[i - 1]) continue; // 重复跳过
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

// const towSum = (arr, target) => {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let complete = target - arr[i];
//     if (map.has(complete)) {
//       return [map.get(complete), i];
//     } else {
//       map.set(complete, i);
//     }
//   }
// };

const towSum = (arr, target) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let complete = target - arr[i];
    if (obj[complete]) {
      [1, 2];
      return [obj[complete], i];
    } else {
      obj[arr[i]] = i;
    }
  }
};

let es = towSum([1, 4, 5, 1, 25], 9);
console.log(es);

var threeSum = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= 0 && arr[i] === arr[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        result.push(arr[i], arr[j], arr[k]);
        j++;
        while (arr[j] === arr[j - 1]) {
          j++;
        }
      }
      if (sum < 0) j++;
      else if (sum > 0) k--;
    }
  }
  return result;
};
