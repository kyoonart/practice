/**
 * @param {string} s
 * @return {string}
 * from https://leetcode-cn.com/problems/decode-string/
 */
var decodeString = function (s) {
  let resStack = [];
  let countStack = [];
  let res = "";
  let muilt = 0;
  if (!s.length) return;
  for (let i = 0; i < s.length; i++) {
    let cur = s.charAt(i);
    if (cur === "[") {
      resStack.push(res);
      countStack.push(muilt);
      res = "";
      muilt = 0;
    } else if (cur === "]") {
      let count = countStack.pop();
      let temp = "";
      for (let j = 0; j < count; j++) {
        temp += res;
      }
      res = resStack.pop() + temp;
    } else if (cur >= "0" && cur <= "9") {
      muilt = muilt * 10 + Number(cur);
    } else {
      res += cur;
    }
  }
  return res;
};
decodeString("3[ac]");
