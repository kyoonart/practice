let res = [];
for (var i = 0; i < 3; i++) {
  res[i] = (function (i) {
    console.log(i);
  })(i);
}
for (let i = 0; i < res.length; i++) {
  res[i];
}
