function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}
function deepClone(source, hash = new Map()) {
  if (getType(source) !== Object && source !== null) {
    return source;
  }
  if (hash.get(source)) return hash.get(source);
  let target = Array.isArray(source) ? [] : {};
  hash.set(source, target);
  for (const key of source) {
    if (getType(source) === "Object") {
      deepClone(source[key], hash);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
// 解决循环引用 map 或者 数组 把对象值存下来 即可
var a = {
  name: "muyiy",
  book: {
    title: "You Don't Know JS",
    price: "45",
  },
  a1: undefined,
  a2: null,
  a3: 123,
};
var b = deepClone(a);

a.name = "高级前端进阶";
a.book.price = "55";
// a.circleRef = a;
console.log(b);
console.log(JSON.parse(JSON.stringify(a)));
