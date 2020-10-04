/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2)
        return 0;
    let max = 0;
    for (let i = 0, len = nums.length, tmp; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (nums[j] > nums[j + 1]) {
                tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp
            }
        }
        if (i > 0) {
            if (nums[len - i] - nums[len - i - 1] > max) {
                max = nums[len - i] - nums[len - i - 1];
            }
        }

    }
    return max;
};
// @lc code=end