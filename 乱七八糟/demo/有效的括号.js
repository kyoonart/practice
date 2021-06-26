var generateParenthesis = function (n) {
  if (n < 1) return null;
  let res = [];
  var drow = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      drow(cur + "(", left + 1, right);
    }
    if (left > right) {
      drow(cur + ")", left, right + 1);
    }
  };
  drow("", 0, 0);
  return res;
};
let res = generateParenthesis(0);
console.log("res = ", res);
