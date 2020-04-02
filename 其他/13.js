/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    A.sort((a, b) => {
        a - b
    });
    let arr = [];
    let odd = 1;
    let even = 0;
    A.forEach(item => {
        if (item % 2 === 0) {
            arr[even] = item;
            even += 2;
        } else {
            arr[odd] = item;
            odd += 2;
        }
    })
    return arr
};