function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait("Hello, closure!");
for (var i = 1; i <= 5; i++) {
    (function() {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    })()
}

for (var i = 1; i <= 5; i++) {
    (function() {
        var j = i;
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })();
}

function foo() {
    console.log(a); // 3（不是 2 ！）
}

function bar() {
    var a = 3;
    foo();
}
// var a = 2;
bar();

function foo() {
    console.log(this.a);
}
var obj2 = {
    a: 42,
    foo: foo
};
var obj1 = {
    a: 2,
    obj2: obj2
};
obj2.foo(); // 42