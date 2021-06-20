function compose(...funs) {
  if (funs.length === 0) return (arg) => arg;
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => {
    return function (...args) {
      // 这行代码的实际上是f1(f2(f3(f4(3))))这样 这样看来更好理解
      return a(b(...args));
    };
  });
}
function f1(x) {
  return x + 1;
}
function f2(x) {
  return x + 2;
}
function f3(x) {
  return x + 3;
}

function compose() {
  let fns = Array.from(arguments);
  return function (data) {
    return fns.reverse().reduce(function (pre, item) {
      return item(pre);
    }, data);
  };
}

const r = compose(f1, f2, f3);
console.log("r", r(1));
