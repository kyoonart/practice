function myPromise(constructor) {
  let self = this;
  self.value = undefined;
  self.status = "padding";
  self.reason = undefined;
  function resolve(value) {
    if (self.status === "padding") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    if (self.status === "padding") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  try {
    constructor(resolve, reject);
  } catch (e) {
    console.error(e);
  }
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case "resolved":
      onFulfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
};
var p = new myPromise(function (resolve, reject) {
  resolve(1);
});

p.then(function (x) {
  console.log(x);
});
