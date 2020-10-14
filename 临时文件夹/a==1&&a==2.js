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