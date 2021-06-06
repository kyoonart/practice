// let obj = {
//   red_apple: "111",
//   blue_apple: {
//     green_apple: {
//       orange_apple: "222",
//     },
//   },
// };

function fn(str) {
  let arr = str.split("_");
  let res = arr.map((item, index) => {
    return index == 0
      ? item
      : item[0].toUpperCase().concat(item.slice(1, item.length));
  });
  return res.join("");
}
var obj = {
  name: "xiaoming",
  all_grades: {
    first_chinese: 114,
    math: 101,
    third_english: 108,
  },
};
function replaceUpper(val, char = "_") {
  if (val.indexOf(char) === -1) return val;
  var arr = val.split(""); //将字符串切割为字符数组
  var index = val.indexOf(char);
  var upperVal = arr[index + 1].toUpperCase(); //将下划线后面第一个字母大写
  arr.splice(index, 2, upperVal);
  return arr.join("");
}
function filterUnderLine(obj, char = "_") {
  var arr = Object.keys(obj).filter((item) => {
    return item.indexOf(char) !== -1;
  });

  arr.forEach((item) => {
    var before =
      typeof obj[item] === "object" ? filterUnderLine(obj[item]) : obj[item];
    var key = replaceUpper(item); //将属性名换成驼峰式
    obj[key] = before;
    delete obj[item];
  });
  return obj;
}
console.log(filterUnderLine(obj));

// function fn(value, char = "_") {
//   let index = value.indexOf(char);
//   let upperVal = value[index + 1].toUpperCase();
//   value.splice(index, 2, upperVal);
//   return value;
// }

// 需求
// 把类名 getLableName 转换成 get_label_name
function translateClassName(className) {
  return className.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function translate(name) {
  return name
    .split("")
    .map((item) => {
      if (item.charCodeAt() >= 67 && item.charCodeAt() <= 96) {
        return "_" + item.toLowerCase();
      } else return item;
    })
    .join("");
}

let res = translate("getLableName");
console.log(res);
