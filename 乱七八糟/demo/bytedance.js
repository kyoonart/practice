function getClassName(name) {
  let arr = name.split("");
  let res;
  res = arr.map((item) => {
    let key = item.charCodeAt();
    let val;
    if (key >= 65 && key < 97) {
      val = "_" + item.toLowerCase();
    } else {
      val = item;
    }
    return val;
  });
  return res.join("");
}
let res = getClassName("myAppName");
console.log(res);

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}
