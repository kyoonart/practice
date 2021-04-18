const Mirror = (root) => {
  if (root) {
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    Mirror(root.left);
    Mirror(root.right);
  }
  return root;
};
const Mirror = (root) => {
  if (root) {
    [root.left, root.right] = [root.right, root.left];
    Mirror(root.left);
    Mirror(root.right);
  }
  return root;
};
