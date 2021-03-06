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
        item.then(
          (data) => {
            result[index] = data;
            if (result.length === arr.length) {
              resolve(result);
            }
          },
          (res) => reject(res)
        );
      }
    });
  });
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 9000, "one");
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
let p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
  //   reject("reject");
});
// let p5 = new Promise((resolve, reject) => {
//     reject('reject');
// });

_PromiseAll([p1, p2, p3, p4]).then(
  (values) => {
    console.log("values", values);
  },
  (reason) => {
    console.log(reason); // reject
  }
);
