function Father() {}
Father.prototype = { name: "tome" };
// Father.prototype.constructor = Father;
var a = new Father();
var b = new Father();
// Father.prototype = null;
// a.__proto__ = null;
console.log(a.name); // tome
console.log(b.__proto__); // tome
console.log(Father.prototype);
console.log(a.__proto__ == Father.prototype); // true

var cc = 11;
for (let i = 0; i < 5; i++) {
  var cc = 12;
  console.log("cc: ", cc);
}
console.log("cc: +++", cc);
