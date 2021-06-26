/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(arr, n) {
    let max = 0;
    // 向数组的首尾都添加一个0
    arr.unshift(0);
    arr.push(0);
    // 遍历整个数组
    for (let i = 1, len = arr.length; i < len - 1; i++) {
        // 当下标为i的元素为0时，判断其左右两侧是否为0，是则计数器max++，且指针i++
        if (!arr[i]) {
            if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                max++;
                // 这是一个缩短运行时长的方法，可有可无，不影响结果
                if (max === n) {
                    return true;
                }
                i++;
            }
        }
    }
    // 判断n是否小于或等于可种花的总数，是则返回true，否则返回false
    return n <= max ? true : false;
};
// @lc code=end