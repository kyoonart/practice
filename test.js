// var a = new Object('xxx')
// console.log(a.__proto__);
// let obj = Object.assign([1, 2, 3, 4], [5, 6])
// console.log(obj);
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.some(item => item > 2));
// for (let index = 0; index < 6; index++) {

// }
// console.log(index);
function wait(message) {
    setInterval(() => {
        console.log(message);
    }, 1000);
}
// wait('hello world')

// var a = 'hello';
// ~ function() {
//     console.log(a);
// }()
// `for (let index = 0; index < 5; index++) {
//     let j = index;
//     setTimeout(function() {
//         // console.log(j);
//     }, j * 1000)

// }`

// function foo() {
//     console.log(this.a);

// }

// function bar() {
//     var a = 6;
//     foo.call(this)
// }
// var a = 2;
// bar()
var a = Object.create(null)
    // console.dir(a.prototype);
var b = {}
    // console.dir(b.prototype)
console.log(typeof(233));
var i = 0;
var arr[3] = { 0 }