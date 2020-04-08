const obj = { a: "one", b: "two", a: "three" };
// console.log(obj)
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a.bx = 123;
// a[c] = 456;

// console.log(a);
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// console.log({} + {});
// console.log([] + []);

var a = 2;

function foo() {
    console.log(a);
}

function bar() {
    var a = 3;
    foo();
}
bar();