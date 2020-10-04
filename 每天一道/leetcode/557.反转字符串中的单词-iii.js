/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.match(/[\w']+/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ');
};
// @lc code=end