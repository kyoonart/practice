let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});
let promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let result = [];
    promises.forEach((promise) => {
      if (promise instanceof Promise) {
        promise.then((res) => {
          result[index] = res;
          if (promises.length === result.length) {
            return resolve(result);
          }
        }, reject);
      }
    });
  });
};
let res = promiseAll([p1, p2]);
console.log(res);

let promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return new Error("error");
    }
    promises.forEach((promise) => {
      if (promise instanceof Promise) {
        promise.then((res) => {
          resolve(res);
        }, reject);
      }
    });
  });
};
const rr = promiseRace([p1, p2]);
console.log(rr);
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}
function _PromiseAll(arr) {
  let result = [];
  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      if (isPromise(item)) {
        item.then((data) => {
          result[index] = data;
          if (result.length === arr.length) {
            return resolve(result);
          }
        }, reject);
      }
    });
  });
}

const Pall = function (promises) {
  let results = [];
  let promiseCount = 0;
  let promisesLength = promises.length;
  return new Promise(function (resolve, reject) {
    for (let val of promises) {
      Promise.resolve(val).then(
        function (res) {
          promiseCount++;
          // results.push(res);
          results[i] = res;
          // 当所有函数都正确执行了，resolve输出所有返回结果。
          if (promiseCount === promisesLength) {
            return resolve(results);
          }
        },
        function (err) {
          return reject(err);
        }
      );
    }
  });
};
const r = Pall([p1, p2]);
console.log(r);

let promise_all = function (promises) {
  return new Promise(function (resolve, reject) {
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(
          function (value) {
            resolvedCounter++;
            resolvedValues[i] = value;
            if (resolvedCounter == promiseNum) {
              return resolve(resolvedValues);
            }
          },
          function (reason) {
            return reject(reason);
          }
        );
      })(i);
    }
  });
};
const r = promise_all([p1, p2]);
console.log(r);
