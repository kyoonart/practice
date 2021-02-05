const getType = (str) =>
  Object.prototype.toString.call(str).slice(8, -1).toLowerCase();
const stringify = (obj, replacer) => {
  if (typeof obj !== "object" || getType(obj) === "Null") {
    return String(obj);
  }
  let json = [];
  let arr = obj ? getType(obj) === "Array" : false;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let item = obj[key];
      // 处理第二个参数
      let flag = true;
      if (replacer) {
        switch (getType(replacer)) {
          case "Function":
            flag = replacer(key, item);
            break;
          case "Array":
            flag = replacer.includes(key);
            break;
          default:
            break;
        }
      }
      if (!flag) continue;
      if (/Function|Symbol|Undefined/.test(getType(item))) {
        delete obj[key];
        continue;
      }
      const IsQunue =
        getType(item) === "String" ||
        getType(item) === "Number" ||
        getType(item) === "Null"
          ? ""
          : '"';
      if (getType(obj) === "Object") {
        item = stringify(item);
      }
      json.push((arr ? IsQunue : '"' + key + '":"') + String(item) + IsQunue);
      // (false? '"' : '"' + 0 + '": "') + String(1) + '"'
      // ""0": "1""
      // 注意三元表达式
    }
  }
  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
};
let res1 = stringify({ name: { name: 1 } }); // "{"name": "{"name": "abc"}"}"
let res2 = stringify([1, 2, 4]); // "["1","2","4"]"
// console.log(res1);
// console.log(res2);

let test = {
  name: "name",
  age: undefined,
  func: function () {},
  sym: Symbol("setter"),
  age: 30,
  sex: "man",
};
console.log(stringify(test, ["name", "sex"])); // {"name": "name","sex": "man"}
let newTest = stringify(test, function (key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
});
console.log(newTest); // {"age": "30}

