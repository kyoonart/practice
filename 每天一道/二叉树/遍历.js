var PreOrqerTraverse = (root) {
    if (root == null) return null;
    console.log(root.val); // 前序遍历 中序遍历 后序遍历 只是改变这个打印的位置
    PreOrqerTraverse(root.left);
    PreOrqerTraverse(root.right);
};
// 非递归实现 前序遍历 其他的同理
function pre(root) {
    let stack = []
    if (root) {
        stack.push(root);
        while (stack.length > 0) {
            let root = stack.pop()
            console.log(root);
            // 由于栈是先进后出的一种结构  所以需要先遍历右子树，再遍历左子树 
            if (root.right) {
                stack.push(root.right)
            }
            if (root.left) {
                stack.push(root.left)
            }
        }
    }
}