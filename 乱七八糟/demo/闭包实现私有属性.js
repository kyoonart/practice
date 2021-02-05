const test = (function () {
  let value = 0;
  return {
    getVal() {
      return value;
    },
    setVal(val) {
      value = val;
    },
  };
})();
console.log(test.getVal());
function foo() {
  // 所有变量在函数中都可访问
  var bar = "bar";
  let baz = "baz";
  const qux = "qux";

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}
// foo();
// console.log(bar); // ReferenceError: bar is not defined
// console.log(baz); // ReferenceError: baz is not defined
// console.log(qux); // ReferenceError: qux is not defined

function func() {
  console.log("running");
}

function ThreeTimes(fn) {
  let times = 0;
  return () => {
    if (times++ < 3) {
      fn();
    }
  };
}
const newFn = ThreeTimes(func);
newFn();
newFn();
newFn();
newFn();
newFn();
