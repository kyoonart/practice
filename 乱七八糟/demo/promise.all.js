function num(x) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(x, console.log("rejected", x));
      if (x === 3) {
        resolve(x, console.log("donex", x));
      }
    }, 100);
  });
  return p;
}
Promise.all([num(1), num(2), num(3)])
  .then((res) => {
    console.log("done", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

let res = [...document.querySelectorAll("*")].map((v) =>
  v.tagName.toLowerCase()
);
let obj = {};
res.forEach((item) => (obj[item] ? obj[item]++ : (obj[item] = 1)));
console.log(obj);
