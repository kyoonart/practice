var reverseWords = function(s) {
    return s.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ');
};
var result = reverseWords("Let's take LeetCode contest")
console.log(result);