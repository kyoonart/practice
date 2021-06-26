const reverse = (num) => {
  let arr = num.toString().split("");
  let res = [];
  while (arr.length) {
    res.push(arr.pop());
  }
  return +res.join("");
};
let r = reverse(123456);
