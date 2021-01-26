/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var tree = {
    this.val = 1;
    this.left = {
        this.left = null;
        this.right = null
        this.val = 1
    },
    this.right = {
        this.left = null;
        this.right = null
        this.val = 1
    },
}
var isBalanced = function(root) {
    function height(root) {
        if (root === null) return 0;
        let lh = height(root.left),
            rh = height(root.right);
        if (lh >= 0 && rh >= 0 && Math.abs(lh - rh) <= 1) {
            return Math.max(lh, rh) + 1;
        } else {
            return -1;
        }
    }
    return height(root) >= 0
};
isBalanced(tree)