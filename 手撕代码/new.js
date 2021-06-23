function create() {
  // 创建一个空的对象
  let obj = new Object();
  // 获得构造函数
  console.log(arguments);
  let Con = [].shift.call(arguments);
  console.log(Con);
  // 链接到原型
  obj.__proto__ = Con.prototype;
  // 绑定 this，执行构造函数
  console.log(arguments);

  let result = Con.apply(obj, arguments);
  // 确保 new 出来的是个对象
  return typeof result === "object" ? result : obj;
}

function Car(color) {
  this.color = color;
}
Car.prototype.start = function () {
  console.log(this.color + " car start");
};

var car = _new(Car, "black");
console.log(car.color);
console.log(car.start());

// black

// car.start();·
// black car startcs
function create() {
  let obj = new Object();
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let result = Con.apply(obj, arguments);
  return typeof result === "object" ? result : obj;
}
// 注意调用方法是这样的
function Car(color, name) {
  this.color = color;
}

var car = create(Car, "black");
// (1) 创建一个新对象；
// (2) 将构造函数的作用域赋给新对象（ 因此 this 就指向了这个新对象）；
// (3) 执行构造函数中的代码（ 为这个新对象添加属性）；
// (4) 返回新对象。
3000;

//
function myNew(fn, ...args) {
  let newObj = Object.create(fn.prototype);
  let result = fn.apply(newObj, args);
  return result && typeof result === "object" ? result : newObj;
}

function new() {
  let obj = {};
  let Pr = [].shift.call(arguments);
  obj.__proto__ = Pr.prototype;
  let res = Pr.apply(obj, arguments);
  return typeof obj === "object" ? res : obj;
}
function cr(pro) {
  let obj = new Object();
  obj.prototype = pro; // pro.prototype;
  obj.prototype.constructor = obj;
}
function Foo() {
  this.a = 1;
  return {
    a: 4,
    b: 5,
  };
}


Foo.prototype.a = 6;
Foo.prototype.b = 7;
Foo.prototype.c = 8;

var o = new Foo();

console.log(o.a); 4
console.log(o.b); 5
console.log(o.c); undefined
