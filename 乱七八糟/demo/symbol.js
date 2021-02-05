let a = Symbol("1");
let b = Symbol("1");
let obj = {
  [a]: 123,
};
console.log(a == b);
// console.log(obj);
obj[b] = 990;
console.log(obj);
