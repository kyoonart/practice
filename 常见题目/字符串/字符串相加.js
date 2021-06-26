// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 要求：

// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库，也不能直接将输入的字符串转换为整数形式
// leetcode 415
const addStrings = function (num1, num2) {
  let cLen = Math.abs(num1.length - num2.length);
  const n1Length = num1.length;
  const n2Length = num2.length;
  let flag = 0;
  let res = "";
  let len;
  if (n1Length - n2Length > 0) {
    len = n1Length;
    while (cLen--) {
      num2 = "0" + num2;
    }
  } else {
    len = n2Length;
    while (cLen--) {
      num1 = "0" + num1;
    }
  }
  while (len-- > 0) {
    let it = +num1[len] + +num2[len] + flag;
    res = (it % 10) + res;
    flag = it > 9 ? 1 : 0;
  }
  res = flag > 0 ? "flag" + res : res;
  return res;
};
addStrings("82", "1232");
const addStrings = function (num1, num2) {
  let res = "";
  let flag = 0;
  while (num1.length > num2.length) {
    num2 = "0" + num2;
  }
  while (num1.length < num2.length) {
    num1 = "0" + num1;
  }
  let i = num1.length - 1;
  while (i-- > 0) {
    let it = +num1[i] + +num2[i] + flag;
    res = (it % 10) + res;
    flag = it > 9 ? 1 : 0;
  }
  return flag > 0 ? flag.toString() + res : res;
};
