/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = [];
    let prve1, prve2;
    ops.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop();
                }
                break;
            case 'D':
                prve1 = result.pop();
                result.push(prve1, prve1 * 2)
                break;
            case '+':
                prve1 = result.pop();
                prve2 = result.pop()
                result.push(prve2, prve1, prve2 + prve1)
                break;

            default:
                result.push(item * 1)
                break;
        }
    });
    // 求和
    return result.reduce((prv, rex) => prv + rex)
};
// @lc code=end