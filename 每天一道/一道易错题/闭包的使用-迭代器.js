// 累加器
var add = (function() {
    var count = 0;
    return function() {
        return ++count
    }
})()
console.log(add());
console.log(add());
console.log(add());

function setup(x) {
    var i = 0;
    return function() {
        return x[i++];
    }
}
var next = setup(['a', 'b', 'c']);
console.log(next()); //'a'
console.log(next()); //'b'
console.log(next()); //'c'

for (var i = 0; i < 10; i++) {
    ~ function(j) {
        setTimeout(function() {
            console.log(j);
        }, i * 1000)
    }(i)
};
// 这两种形式是一样的
for (var i = 0; i < 10; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, i * 1000)
    })(i)
}
// 实际开发中闭包的使用  
// 判断一个数字是否出现过
function isfirst() {
    let list = []
    return function(id) {
        if (list.indexOf(id) >= 0) {
            return false;
        } else {
            list.push(id)
            return true;
        }
    }
}
var first = isFirst();
first(10);
first(10);
first(20);