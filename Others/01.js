function Father() {}
Father.prototype = { name: "tme" };
var a = new Father();
Father.prototype = null;
console.log(a.name); // tme
console.log(a.__proto__);
