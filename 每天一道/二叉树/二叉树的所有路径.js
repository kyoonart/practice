var binaryTreePaths = function (root) {
  if (!root) return [];
  var result = [];
  var bfs = function (root, tmp) {
    if (!root) return;
    if (!root.left && !root.right) {
      result.push(tmp);
      return;
    }
    root.left && bfs(root.left, `${tmp}->${root.left.val}`);
    root.right && bfs(root.right, `${tmp}->${root.right.val}`);
  };
  bfs(root, `${root.val}`);
  return result;
};
