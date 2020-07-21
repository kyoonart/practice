function functions(flag) {
    if (flag) {
        var getValue = function () {
            return "a";
        };
    } else {
        var getValue = function getValue() {
            return "b";
        };
    }

    return getValue();
}
console.log("125".toString(2));

console.log(functions(1));
