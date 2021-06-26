function fn(str) {
  let res = [];
  for (let index = 0; index < str.length; index++) {
    for (let j = index + 1; j <= str.length; j++) {
      let ele = str.slice(index, j);
      res.push(ele);
    }
  }
  console.log(res);
  console.log(res.length);
}
fn("abc");
