// 思路 利用字符串截取函数 遍历字符串找到 start 和 end 位置即可
function trim(str) {
    let start = 0
    let end = 0
    let len = str.length
    for (let i = 0; i < len; i++) {
        if (str[i] != ' ') {
            start = i
            break
        }
    }
    for (let j = len - 1; j >= 0; j--) {
        if (str[j] != ' ') {
            end = j + 1
            break
        }
    }
    console.log(start, end);
    return str.slice(start, end)
}
let res = trim('  aabb   ')
console.log(res);