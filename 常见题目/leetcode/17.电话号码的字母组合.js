/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(str) {
    // 建立电话号码键盘映射
    // let map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // //把输入的字符串按照单字符分割成数组  234=>[2,3,4]
    // let num = digits.split('');
    // // 保存键盘映射的值 [2,3]=>['abc','def']
    // let code = [];
    // num.forEach(item => {
    //     if (map[item]) {
    //         code.push(map[item])
    //     }
    // });
    // let comb = (arr) => {
    //     // 临时变量用来保存前两个组合的结果
    //     let tmp = [];
    //     // 排列组合前两个
    //     for (let i = 0, il = arr[0].length; i < il; i++) {
    //         for (let j = 0, jl = arr[1].length; j < jl; j++) {
    //             tmp.push(`${arr[0][i]}${arr[1][j]}`)
    //         }
    //     }
    //     //  这一步很重要,把排列结果替换前两项 以此递归
    //     arr.splice(0, 2, tmp);
    //     // 递归
    //     if (arr.length > 1) {
    //         comb();
    //     } else {
    //         return tmp;
    //     }
    //     return arr[0];
    // }
    // return comb(code);
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
        // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
    let num = str.split('')
        // 保存键盘映射后的字母内容，如 23=>['abc','def']
    let code = []
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    })
    let comb = (arr) => {
        arr = code
            // 临时变量用来保存前两个组合的结果
        let tmp = []
            // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
        for (let i = 0, il = arr[0].length; i < il; i++) {
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, tmp)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return tmp
        }
        return arr[0]
    }
    return comb(code)
};
// @lc code=end
// 建立电话号码键盘映射