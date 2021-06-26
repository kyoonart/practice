var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
