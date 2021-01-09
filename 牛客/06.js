function fn(arr) {
  // let obj = {};
  // arr.map((item) => {
  //   obj[item] ? obj[item]++ : (obj[item] = 1);
  // });
  let p = new Map();
  arr.forEach((item) => {
    let val = p.get(item) || 1;
    if (p.has(item)) {
      val += 1;
      p.set(item, val);
    } else {
      p.set(item, 1);
    }
  });

  return p;
}
console.log(
  fn([
    "aa",
    "bb",
    "cc",
    "dd",
    ,
    "233",
    "aa",
    "bb",
    "cc",
    "dd",
    "ef",
    "fd",
    "bb",
    "ac",
    "ac",
    "bf",
    "cc",
  ])
);
