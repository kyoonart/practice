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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 最小深度

var minDepth = function(root) {
    if (!root) return 0;
    // 需要判断一下有无左右子节点
    if (!root.left || !root.right) return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}