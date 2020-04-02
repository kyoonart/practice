var maxDepth = function(root) {
        if (!root) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
    // 对于该递归函数可以这样理解： 一旦没有找到节点就会返回 0，
    // 每弹出一次递归函数就会加一， 树有三层就会得到3