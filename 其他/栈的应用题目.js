function isValid(s) {
    let map = {

        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(s[i])
            console.log(stack);

        } else {
            let last = stack.pop()
            console.log(last);

            if (map[s[i]] + map[last] != 0) return false;
        }
    }
    if (stack.length > 0) return false
    return true

}

let s = '({[]})'

console.log(isValid(s));