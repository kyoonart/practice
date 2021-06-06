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
// 实现2;
// 需求
// input
// const obj = {
//     selector: { to: { val: 'val to select' } },
//     target: [1, 2, { a: 'test' }],
//   };
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
// output
// ['val to select', 1, 'test']

const obj = {
  selector: { to: { val: "val to select" } },
  user: { name: "xiaohong" },
  target: [1, 2, { a: "test" }],
};

function get(from, ...selectors) {
  const r = selectors.map((s) => {
    return s
      .replace(/\[(\w+)\]/g, ".$1")
      .split(".")
      .reduce((prev, cur) => {
        return prev && prev[cur];
      }, from);
  });
  return r;
}

let r = get(obj, "selector.to.val", "user.name", "target[0]", "target[2].a");
console.log("r", r);
