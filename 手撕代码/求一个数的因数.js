function fn(num) {
  let res = [];
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      res.push(i);
      // num = num / i;
    }
  }
  console.log(res);
}
fn(20);
// console.log(i);
