function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot);
}
// 对称二叉树 镜像二叉树
function isSymmetricalTree(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  if (node1.val !== node2.val) return false;
  return (
    isSymmetricalTree(node1.left, node2.right) &&
    isSymmetricalTree(node1.right, node2.left)
  );
}
// http://www.conardli.top/docs/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E5%AF%B9%E7%A7%B0%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E9%A2%98%E7%9B%AE
二叉树的右子树是;
