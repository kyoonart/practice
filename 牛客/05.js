function fn(str) {
  let strToArr = str.split("");
  let reg = /^[0-9]+.?[0-9]*$/;
  for (let i = 0; i <= strToArr.length; i++) {
    if (reg.test(strToArr[i])) {
      strToArr[i] = "*" + strToArr[i] + "*";
    }
  }
  return strToArr.join("").replace(/\*\*/g, "");
}
let res = fn("5O6t6FFtIlMVDn7rTaZki4Pl42Xx6n");
console.log(res);
// 表示数字  字符串中表示数字的前面加个* 连续数字视为一个整体 后面加个*
