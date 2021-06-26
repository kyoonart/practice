/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n == 0) {
        return ['0'];
    }
    // 采用递归函数实现
    let make = (n) => {
        if (n == 1) {
            return ['0', '1']
        } else {
            // 递归得到数组
            let prev = make(n - 1);
            let result = [];
            let max = Math.pow(2, n) - 1
            for (let i = 0; i < prev.length; i++) {
                // 对称加0和1
                result[i] = `0${prev[i]}`;
                result[max - i] = `1${prev[i]}`
            }
            return result
        }
    }
    return make(n).map(v => {
        return parseInt(v, 2)
    })
};
// @lc code=end