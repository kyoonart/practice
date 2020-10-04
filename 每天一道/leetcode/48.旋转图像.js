/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let v = matrix.length;
    // 垂直反转
    for (let i = 0, len = v / 2; i < len; i++) {
        for (let j = 0; j < v; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[v - i - 1][j];
            matrix[v - i - 1][j] = tmp;
        }
    }
    // 对角线反转‘
    for (let i = 0; i < v; i++) {
        for (let j = 0; j < i; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    return matrix
};
// @lc code=end