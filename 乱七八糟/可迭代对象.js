// let range = { start: 1, to: 10 };
// //  1. for..of 调用首先会调用这个：
// range[Symbol.iterator] = function() {
//     // 返回一个迭代器对象
//     return {
//         current: this.start,
//         last: this.to,
//         // 3. next() 在 for..of 的每一轮循环迭代中被调用
//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }

let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // [Symbol.iterator]: function*() 的简写形式
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};
for (let num of range) {
  console.log(num);
}

// 定义了一个promise，用来模拟异步请求，作用是传入参数++
function getNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 1000);
  });
}
// async/await语法糖就是使用Generator函数+自动执行器来运作
//自动执行器，如果一个Generator函数没有执行完，则递归调用
function asyncFun(func) {
  var gen = func();

  function next(data) {
    var result = gen.next(data);
    if (result.done) return result.value;
     result.value.then(function (data) {
      next(data);
    });
  }
  next();
}

// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步
var func = function* () {
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2);
};
asyncFun(func);

var func = function* () {
  var f1 = yield getNum(1);
  var f2 = yield getNum(2);
  console.log(f2);
};
  funcition asyncFun(func){
      var gen=func();
      funcition next(data){
        var result =gen.next(data);
        if(result.done) return result.value;
        result.value.then(function(data){next(data)});
      }
      next()
  }

  let obj={
    obj:1,
    b:2
  }
  console.log(obj.obj);
  for (const item of obj) {
     console.log(item);
  }


 