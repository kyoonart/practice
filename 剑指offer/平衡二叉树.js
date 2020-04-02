function IsBalanced_Solution(pRoot) {
    // write code here
    if (!pRoot) return true;
    if (Math.abs(TreeDep(pRoot.left) - TreeDep(pRoot.right) > 1)) return false;
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}

function TreeDep(root) {
    if (root == null) return 0;
    if (root.left == null || root.right == null) return 1;
    return Math.max(TreeDep(root.left), TreeDep(root.right)) + 1;
}

function IsBalanced_Solution(pRoot) {
    if (pRoot == null) return true;
    let leftLen = TreeDepth(pRoot.left);
    let rightLen = TreeDepth(pRoot.right);
    return Math.abs(rightLen - leftLen) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}

function treeDep(root) {
    if (!root) return 0;
    let left = treeDep(root.left);
    if (left === -1) return -1;
    let right = treeDep(root.right);
    if (right === -1) return -1;
    return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1
}

function IsBalanced_Solution(pRoot) {
    return treeDep(pRoot) !== -1
}