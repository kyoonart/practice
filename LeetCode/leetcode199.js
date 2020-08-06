/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */ //

// dfs
// var rightSideView = function(root) {
//     let res = [];
//     dfs(root, res, 0);

//     function dfs(node, res, depth) {
//         if (!node) {
//             return;
//         }
//         if (res.length === depth) {
//             res.push(node.val);
//         }
//         dfs(node.right, res, depth + 1);
//         dfs(node.left, res, depth + 1);
//     }

//     return res;
// };
// bfs
var rightSideView = function(root) {
    let res = [];
    let qunue = [];
    if (!root) {
        return res;
    }
    qunue.push(root);
    while (qunue.length) {
        let len = qunue.length;
        for (let i = 0; i < len; i++) {
            let curNode = qunue.shift();
            if (i === len - 1) {
                res.push(curNode.val);
            }
            if (curNode.left) {
                qunue.push(curNode.left);
            }
            if (curNode.right) {
                qunue.push(curNode.right);
            }
        }
    }
    return res;
};

// @lc code=end