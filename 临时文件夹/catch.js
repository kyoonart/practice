var mult = function() {
    var cache = {};
    var calculate = function() {
        var a = 1;
        for (var i = 0, len = arguments.length; i < len; i++) {
            a = a * arguments[i];
        }
        return a;
    };
    return function() {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
}()
console.log(mult(1, 1, 1, 2, 3, 3)); //18