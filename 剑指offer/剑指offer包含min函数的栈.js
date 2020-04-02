// var stack = [];
// var minStack = [];
// var temp = null;

// function push(node) {
//     // write code here
//     if (temp !== null) {
//         if (node < temp) {
//             temp = node
//         }
//         stack.push(node);
//         minStack.push(temp)
//     } else {
//         temp = node;
//         minStack.push(node);
//         stack.push(node)
//     }
// }

// function pop() {
//     // write code here
//     stack.pop();
//     minStack.pop();

// }

// function top() {
//     // write code here
//     return stack.pop()
// }

// function min() {
//     // write code here
//     return minStack.pop()
// }
// var arr = [2, 3, 5]
//     // console.log(arr.pop());
// console.log(arr[arr.length - 1]);

// function IsPopOrder(pushV, popV) {
//     // write code here
//     var stack = [];
//     var index = 0;
//     for (let i = 0; i < pushV.length; i++) {
//         stack.push(pushV[i]);
//         while (stack.length && popV[index] == stack[stack.length - 1]) {
//             stack.pop();
//             index++;
//         }
//     }
//     return stack.length == 0;
// }
// function GetBytes(str) {

//     var len = str.length;

//     var bytes = len;

//     for (var i = 0; i < len; i++) {

//         if (str.charCodeAt(i) > 255) bytes++;

//     }

//     return bytes;

// }


// console.log(GetBytes("你好,as"));
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i + 1)
//     }, i * 1000)

// }
// var flatten = (arr) => {
//     return arr.reduce((pre, item) => {
//         return pre.concat(Array.isArray(item) ? flatten(item) : item)
//     }, [])
// }
// console.log(flatten([2, 5, [2, 3, 5, [2, 1]]]));
// function* test() {
//         let a = 1 + 2;
//         yield a * 2;
//         yield 3;
//     }
// let b = test();
// console.log(b.next()); // >  { value: 2, done: false }
// console.log(b.send(2)); // >  { value: 3, done: false }
// console.log(b.next()); // >  { value: undefined, done: true }
// console.log(b.next());
//const flattenDeep = (arr) => Array.isArray(arr) ?
//  arr.reduce((a, b) => [...a, ...flattenDeep(b)], []) : [arr]

//console.log(flattenDeep([1, [
//  [2],
//  [3, [4]], 5
//]]));
// console.log([1, [2, [3]], 3].flatMap(v => v));
//var a = [1, 1, 1, 2, 2, 5, 3, 3]
// console.log([...new Set(a)]);
// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3,
//     },
// }
// obj.a = 6;
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b
// obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)