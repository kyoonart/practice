/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let len = nums.length - 1;
    for (let i = len; i > len - k; i--) {
        for (let j = 0, tmp; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp
            }
        }

    }
    return nums[len - (k - 1)]
};
// @lc code=end