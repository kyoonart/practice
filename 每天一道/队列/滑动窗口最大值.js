//剑指 Offer 59 - I. 滑动窗口的最大值
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  let res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    res.push(Math.max(...nums.slice(i, k + i)));
  }
  return res;
};

//  维护一个队列 在每个窗口找最大值
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) {
    return [];
  }
  const queue = [];
  const result = [];
  for (let i = 0; i <= nums.length; i++) {
    if (i < k) {
      queue.push(nums[i]);
    } else {
      result.push(Math.max(...queue));
      if (i !== nums.length) {
        queue.shift();
        queue.push(nums[i]);
      }
    }
  }
  return result;
};

