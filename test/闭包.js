function Count() {
  let times = 0;
  return () => times++;
}
let count1 = new Count();
let count2 = new Count();
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count2());
