function Fn() {
  this.name = "name";
}
const a = new Fn();
console.log(a.__proto__ === Fn.prototype, a.__proto__ === Fn);
function Parent() {}
var p = new Parent();
console.log(p.__proto__ === Parent.prototype);
let r = Object.getPrototypeOf(a);
console.log("r", r === a.__proto__);
