// JS编码实现一个render方法，使得可以这样调用：
const year = "2017";
const month = "09";
const day = "21";
// const str = render("${year}-${month}-${day}")({ year, month, day });
// console.log(str); // 输出2017-09-21
const template = (
  str = "${year}-${month}-${day}",
  data = { year, month, day }
) => {
  return str.replace(/\$\{(\w+)\}/g, function (match, key) {
    return data[key];
  });
};
let rs = template();
console.log(rs);

