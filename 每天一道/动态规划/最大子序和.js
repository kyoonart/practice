// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 动态规划求解
// 1.初始化当前最大连续子序列和为sum，结果为ans，ans取数组的第一个元素
// 2.如果sum>0，则说明sum对结果有增益效果，则sum保留并加上当前遍历数组
// 3.如果sum<0，则说明sum对结果无增益效果，需要舍弃，则sum直接更新为当前遍历数字
// 4.每次比较sum和ans的大小，将最大值置为ans，遍历结束返回结果

var maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};
