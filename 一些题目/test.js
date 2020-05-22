// function isReserveSame(preString, lastString) {
//     let pre = preString.split()
//     let last = lastString.split()
//     if (pre.length !== last.length) return 0;
//     if (pre.shift() === last.shift()) {
//         isReserveSame(pre, last)
//     } else {
//         return 0
//     }
//     if (pre.length === 0 && last.length === 0) return 1
// }
// let s1 = 'xueersiisreeux'
// let s2 = 'xueersiisreeux'
// console.log(isReserveSame(s1, s2));


function isReserveSame(str) {
    let newarr = str.toLowerCase();
    let lens = newarr.length;
    while (newarr.lens >= 1) {
        if (newarr[0] != newarr[lens - 1]) {
            return false
        } else {
            return isReserveSame(newarr.slice(1, lens - 1))
        }
    }
    return true
}

function engthOfLongestSubstr(s) {
    let max = 0,
        maxArr = [],
        oldArr = [];
    s.split('').forEach((item, index) => {
        if (maxArr.indexOf(item) === -1) {
            maxArr.push(item)
            if (maxArr.length > max) {
                maxArr = maxArr.length;
            }
        } else {
            maxArr = [item]
            let tem = oldArr.pop();
            while (tem != item) {
                maxArr.unshift(tem)
                tem = oldArr.pop()
            }
        }
        oldArr = [...maxArr]
    })
    return max
}
console.log(engthOfLongestSubstr('abcabcbb'));