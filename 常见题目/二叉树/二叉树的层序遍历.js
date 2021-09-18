function recursion(node, result, index) {
  if (!node) return null;
  result[index] ? result[index].push(node.val) : (result[index] = [node.val]);
  const newIndex = index + 1;
  recursion(node.left, result, newIndex);
  recursion(node.right, result, newIndex);
}
var levelOrder = function (root) {
  const result = [];
  recursion(root, result, 0);
  return result;
};

// 变形   按照层级输出对象的属性key
function recursion(node, result, index) {
  if (!node) return null;
  let keys = Object.keys(node);
  let next = [];
  keys.forEach((k) => {
    next.push(node[k]);
  });
  if (keys.length) {
    result[index] ? result[index].push(...keys) : (result[index] = [...keys]);
  }
  const newIndex = index + 1;

  next.forEach((o) => {
    recursion(o, result, newIndex);
  });
}
var levelOrder = function (root) {
  const result = [];
  recursion(root, result, 0);
  return result;
};

let obj = {
  b: {
    c: {
      d: {
        i: {},
      },
    },
  },
  f: {
    g: {
      l: {},
    },
  },
};
console.log(levelOrder(obj));
