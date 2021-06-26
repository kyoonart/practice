let a = "071";
let b = 71;
let c = "57";
let d = 57;
b = b.toString();
console.log(b);
console.log(parseInt(a), parseInt(b), parseInt(c));
// console.log(parseInt(a).toString(10));
console.log(parseInt(57, 8));
var path = require("path");
var fs = require("fs");
console.log(path.resolve(__dirname, "dist"));
console.log();
fs.mkdir(path.join(__dirname, "dist"), (err, result) => {
  console.log("创建成功");
  console.log(err);
});
