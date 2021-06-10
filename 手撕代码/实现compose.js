function compose(...funs) {
  if (funs.length === 0) return (arg) => arg;
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => {
    return function (...args) {
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
const r = compose(f1, f2, f3);
console.log("r", r(1));
