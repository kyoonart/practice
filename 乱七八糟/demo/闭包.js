function fn() {
  let a = 0;
  return function () {
    return a++;
  };
}
let f1 = fn();
let f2 = fn();
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f2());
console.log(f2());
console.log(f2());
let f = fn();
console.log(f());
console.log(f());
