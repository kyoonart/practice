function isSymmetrical(pRoot) {
    if (pRoot == null) return true;
    return check(pRoot.left, pRoot.right)
}

function check(left, right) {
    if (left == null && right == null) {
        return true;
    } else if ((left == null && right !== null) || (left !== null && right == null) || (left.val !== right.val)) {
        return false;
    }
    return check(left.left, right.right) && check(left.right, right.left)
}