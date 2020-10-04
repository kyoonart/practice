/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */
// 解题思路:
//     只要以此用手里的钥匙打开对应的房门， 将房门内新的钥匙取出放入手里钥匙这个数组， 直到手里没有新钥匙循环结束.
// 最后判断钥匙数量和房间数量是否相等就可以得出结果. **
//     这里要注意房门内可能取得几条同样的钥匙， 需要将得到的数组去重.

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let n = 0;
    let key = [0];
    while (key.length > n) {
        key = key.concat([...new Set(rooms[key[n]].filter((item) => !key.includes(item)))]);
        n++;
    }
    return key.length === rooms.length
};
// @lc code=end