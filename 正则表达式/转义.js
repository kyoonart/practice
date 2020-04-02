let price = 12.34;
console.log(/\d+\.\d+/.test(price));
// 对象的时候需要多加一层  '\'
let reg = new RegExp("\\d+\\.\\d+");
console.log(reg.test(price));