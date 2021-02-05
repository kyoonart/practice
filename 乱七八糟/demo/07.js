var isPalindrome = function (x) {
  return x === Number(x.toString().split("").reverse().join(""));
};
let res = isPalindrome(121);
console.log(res);
