//我有一个json
let json = {
  body: {
    data: {
      data: [1, 2, 3],
      pagenation: { page: 1, pageSize: 10 },
    },
  },
};

//我想通过这种方式方便的获取到对象的属性值或类型

//这里是实现方法，采用递归读取对象的属性值
function getField(data, fields) {
  let arr =
    fields.split(".")[0] === "json"
      ? fields.split(".").slice(1)
      : fields.split(".");
  let key = arr.shift();
  let value = data[key];
  if (arr.length === 0) return value;
  if (!value) return undefined;
  return getField(value, arr.join("."));
}
let res = getField(json, "json.body.data.data");
let value = getField(json, "json.body.data.pagenation.page");
let resType = getField(json, "json.body.data.data");
console.log(res, value, resType);
function getField(obj, fields) {
  let arr = fields.split(".");
  let key = arr.shift();
  let value = obj[key];
  if (arr.length === 0) return value;
  if (!value) return undefined;
  return getField(value, arr.join("."));
}
