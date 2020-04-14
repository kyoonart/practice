var a = new Object('xxx')
console.log(a.__proto__);
let obj = Object.assign([1, 2, 3, 4], [5, 6])
console.log(obj);
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.some(item => item > 2));
for (let index = 0; index < 6; index++) {

}
console.log(index);

function wait(message) {
    setInterval(() => {
        console.log(message);
    }, 1000);
}
wait('hello world')

var a = 'hello';
~ function() {
    console.log(a);
}()
`for (let index = 0; index < 5; index++) {
    let j = index;
    setTimeout(function() {
        // console.log(j);
    }, j * 1000)

}`

function foo() {
    console.log(this.a);

}

function bar() {
    var a = 6;
    foo.call(this)
}
var a = 2;
bar()
var a = Object.create(null)
console.dir(a.prototype);
var b = {}
console.dir(b.prototype)
console.log(typeof(233));
var i = 0;
var a = '233'
console.log(void 0)
let arr = [2, 5, 'csa', { dv: 233 }, '$']
console.log(arr);
console.log(typeof + Infinity);
let arr = [1, 2]
console.log(c, d);
var a = 0;
console.log(a, global.a); // 输出 0 和 0
if (true) {
    console.log(a, global.a); // 函数提升，是块级作用域，输出 function a 和 0
    a = 1; // 取作用域最近的块级作用域的 function a ,且被重置为 1了，本质又是一个 变量的赋值。
    console.log(a, global.a); // a 是指向块级作用域的 a, 输出 1 和 0 
    function a() {} // 函数的声明，将执行函数的变量的定义同步到函数级的作用域。
    console.log(a, global.a); // 输出 1 和 1
    a = 21; // 仍然是函数定义块级作用域的 a ,重置为 21
    console.log(a, global.a); // 输出为函数提升的块级作用域的 a, 输出 21，1
    console.log("里面", a);
}
console.log("外部", a);

var b = 4;
if (true) {
    function b() {}
    b = 6;


}
console.log(b);
for (const iterator of 'object') {
    console.log(iterator);

}

function add(...values) {
    console.log(values);
}
add(1, 2, 3, 5, 5)
console.log(...[1, 3, [2, [5, [2]]]]);
Number.prototype[Symbol.iterator] = function*() {
    let i = 0;
    let num = this.valueOf();
    while (i < num) {
        yield i++;
    }
}

console.log([...5]) // [0, 1, 2, 3, 4]
let f = Array.of(1, 2, 3, 4, 5)
let g = Array.from(1, 2, 5)
console.log(f, g);

const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
console.log(first, second);