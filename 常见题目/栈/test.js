/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1 || s.length % 2 !== 0) return false;
    let map = {
        '(': -1,
        ")": 1,
        '{': -2,
        '}': 2,
        '[': -3,
        ']': 3
    }
    let arr = s.split('');
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] < 0) stack.push(arr[i])
        else {
            let temp = stack.pop();
            if (map[arr[i]] + map[temp] !== 0) return false;
        }

    }
    if (stack.length > 0) return false;
    return true;
};