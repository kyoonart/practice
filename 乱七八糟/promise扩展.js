// const p = new Promise.race([
//     fetch("/resource-that-may-take-a-while"),
//     new Promise(function(resolve, reject) {
//         setTimeout(() => reject(new Error("request timeout")), 5000);
//     }),
// ]);
// p.then((response) => console.log(response));
// p.catch((error) => console.log(error));
const warnDemo = (ctx) => {
  const promise = new Promise((resolve) => {
    resolve(ctx);
    console.log("After resolved, but Run"); // 依然会执行这个语句
  });
  return promise;
};

warnDemo("ctx").then((ctx) => console.log(`This is ${ctx}`));

//简单版本的promise
function myPromise(constructor) {
  let self = this;
  self.status = "pending"; //定义状态改变前的初始状态
  self.value = undefined; //定义状态为resolved的时候的状态
  self.reason = undefined; //定义状态为rejected的时候的状态
  function resolve(value) {
    //两个==="pending"，保证了状态的改变是不可逆的
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    //两个==="pending"，保证了状态的改变是不可逆的
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
// 定义链式调用的then方法
myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case "resolved":
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
};

function myPromise(constructor) {
  let that = this;
}
