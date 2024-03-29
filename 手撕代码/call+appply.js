// 测试一下
var foo = {
  value: 1,
};

function bar() {
  console.log(this.value);
}
Function.prototype.callx = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  //   this是.前面的那个(谁调用它this指向就是谁)
  let args = [...arguments].slice(1);
  let result = context.fn(...args);

  delete context.fn;
  return result;
};

bar.callx(foo); //

Function.prototype.apply = function (context, arr) {
  // this 参数可以传基本类型数据，原生的 call 会自动用 Object() 转换
  context = context ? Object(context) : window;
  context.fn = this;

  let result;
  if (!arr) {
    result = context.fn();
  } else {
    result = context.fn(...arr);
  }
  //testing
  delete context.fn;
  return result;
};
