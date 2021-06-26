/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let map = ((matrix, r = []) => {
        for (let i = 0, len = matrix.length; i < len; i++) {
            if (i === 0) {
                r = r.concat(matrix[i])
            } else if (i === len - 1) {
                r = r.concat(matrix[i].reverse())
            } else {
                r.push(matrix[i].pop())
            }
        }
        matrix.pop();
        matrix.shift()
        for (let j = matrix.length - 1; j > 0; j--) {
            r.push(matrix[j].shift())
        }
        if (matrix.length) {
            return map(matrix, r)
        } else {
            return r
        }

    })
    return map(matrix, []).filter(item => item != undefined)
};
// @lc code=end