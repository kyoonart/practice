const a = {
    value: [1, 2, 3],
    toString: function() {
        return this.value.shift();
    },
    ValueOf: function() {
        return this.value.shift();
    }

}
console.log(!!(a == 1 & a == 2 & a == 3));

let b = {
    // valueOf() {
    //     return 0
    // },
    // toString() {
    //     return '1'
    // },
    a: 1,
    [Symbol.toPrimitive]() {
        return this.a++
    }
}
console.log((b == 1 && b == 2 && b == 3));

// Symbol.toPrimitive的优先级比valueOf 和 toString高