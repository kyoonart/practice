/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// 重复DNA序列
var findRepeatedDnaSequences = function(s) {
    let seenTimes = {};
    let res = [];
    let i = 0;
    while (i + 10 <= s.length) {
        let sequence = s.slice(i, i + 10);
        seenTimes[sequence] = seenTimes[sequence] + 1 || 1;
        if (seenTimes[sequence] === 2) {
            res.push(sequence);
        }
        i++
    }
    return res;
};
// @lc code=end