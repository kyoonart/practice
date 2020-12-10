// Function.prototype.a = () => console.log(1);;
// Object.prototype.b = () => console.log(2);

// function A() {}
// const a = new A();
// // a.a();
// A.a()
// a.b();


var a = 1;

function Fn1() {
    var a = 2;
    console.log(this);
    console.log(this.a + a);
}

function Fn2() {
    var a = 10;
    Fn1()
}
Fn2()
var Fn3 = function() {
    this.a = 3;
}
Fn3.prototype = {
    a: 4
}
var fn3 = new Fn3();
Fn1.call(fn3)