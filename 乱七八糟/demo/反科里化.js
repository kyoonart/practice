Function.prototype.uncurrying = function () {
  var that = this;
  return function () {
    return Function.prototype.call.apply(that, arguments);
  };
};

function sayHi() {
  return "Hello " + this.value + " " + [].slice.call(arguments);
}
let sayHiuncurrying = sayHi.uncurrying();
console.log(sayHiuncurrying({ value: "world" }, "hahaha"));
function curry(func) {
  return function curried(...arg1) {
    if (arg1.length >= func.length) {
      return func.apply(this, arg1);
    } else{
      rerurn function(...arg2){
        return curried.apply(this, arg1.concat(arg2));
      }
    }
  };
}
