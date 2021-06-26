// 引入模块 main.js
var mod = require("./counter");

console.log(mod.counter); // 3
mod.incCounter();
mod.incCounter();

mod.incCounter();

mod.incCounter();

console.log(mod.counter); // 3
