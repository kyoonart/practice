function myPromise(constructor) {
  let self = this;
  self.status = "pending";
  self.value = "";
  self.reason = "";
  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved";
      self.value = value;
    }
  }
  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected";
      self.reason = reason;
    }
  }
  try {
    constructor(resolve, reject);
  } catch (err) {
    console.log(err);
  }
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  switch (self.statuss) {
    case "resolved":
      onFulfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
};
