// 记住和字符串遍历有关的都可以转换为一个对象 让对象来记录各个字符出现的次数
function FirstNotRepeatingChar(str) {
    // write code here
    if (str.length < 1 || str.length > 10000)
        return -1;
    const map = {};
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1
        } else {
            map[str[i]]++
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) {
            return i
        }
    }
    return -1;
}