const v = { x: 1, y: 2 };
// 补充 code
// const b = JSON.parse(JSON.stringify(a));
// const b = { ...a };
const b = Object.assign({}, v);
b.y = 3;
console.log(v); // 输出 { x: 1, y: 2 }
console.log(b); // 输出 { x: 1, y: 3 }

// function fn() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//     resolve(2);
//   });
// }
// fn().then((res) => {
//   console.log(res);
// });
this.a = 20;
var test = {
  a: 40,
  init: () => {
    console.log(this.a); // 20
    function go() {
      this.a = 60;
      console.log(this.a); //60
    }
    go.prototype.a = 50;
    return go;
  },
};
var p = test.init();
// new p();

// let d = 2;
// const e = 10;
// e = 11;
// function dd() {
//   const e = 12;
// }
// (function () {
//   var a;
//   b = 5;
//   d = 3;
//   let e = 11;
// })();
// console.log(b);
// console.log(d);
// console.log(e);
// console.log(a);

let arr = [1, [2, 4, [6, [7]]]];
function fn(arr, res = []) {
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      fn(i, res);
    } else {
      res.push(i);
    }
  });
  return res;
}
let r = fn(arr);
console.log(r);
function flat(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  console.log(arr);
}
flat(arr);
function flat(arr) {
  let res = [];
  for (const i of arr) {
    Array.isArray(i) ? (res = res.concat(...i)) : res.push(i);
  }
  return res;
  console.log(res);
}
