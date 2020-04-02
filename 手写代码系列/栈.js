class Stack {
    constructor() {
        this.stack = []
    }
    push(item) {
        this.stack.push(item)
    }
    pop() {
        this.stack.pop()
    }
    peek() {
        return this.stack[this.getCount() - 1]
    }
    getCount() {
        return this.stack.length
    }
    isEmpty() {
        return this.getCount() === 0
    }
}
var isValid = function(s) {
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
        } else {
            let last = stack.pop()
            if (map[last] + map[s[i]] != 0) return false
        }
    }
    if (stack.length > 0) return false
    return true
};
console.log(isValid(['(', ')', "{", "}"]));