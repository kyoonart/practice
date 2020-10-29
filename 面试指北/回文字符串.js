function isPalindrome(str) {
    return [...str].reverse().join('') == str
}
let str = 'abssvba';

function isPalindrome2(str) {
    str += '';
    for (var i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) !== str.charAt(j)) return false
    }
    return true
}
console.log(isPalindrome2(str));