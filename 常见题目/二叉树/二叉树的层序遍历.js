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
