function arrayStandards(arr) {
  let res = [];
  let temp = new Map();
  arr.forEach((item, index) => {
    let val = 1;
    if (res.indexOf(item) === -1) {
      res.push(item);
      temp.set(item, val);
    } else {
      if (temp.has(item)) {
        val = temp.get(item) + 1;
        temp.set(item, val);
      }
    }
  });
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let dp = temp.get(arr[i]);
    if (typeof arr[i] === "number") {
      result.push(Number(arr[i].toString() + dp));
    } else {
      result.push(arr[i] + dp);
    }
    dp = dp - 1;
    temp.set(arr[i], dp);
  }
  console.log(result.reverse());
}
let res = [
  111,
  "111",
  222,
  "222",
  111,
  111,
  111,
  111,
  22,
  33,
  4444,
  5,
  555,
  5,
  55,
  55,
  "22",
  "222",
];
// let res = [111, '111', 222, '222', 111, 111, 111, 111, 22, 33, 4444, 5, 555, 5, 55, 55, '22', '222'] => [
//     1111, '1111', 2221, '2221', 1112, 1113, 1114, 1115, 221, 331, 44441, 51, 5551, 52, 551, 552, '221', '2222'
// ]
arrayStandards(res);
