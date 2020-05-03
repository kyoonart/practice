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

function pos(root) {
    if (root) {
        let stack1 = [];
        let stack2 = [];
        // 后序遍历是先左再右最后根
        // 所以对于一个栈来说，应该先 push 根节点
        // 然后 push 右节点，最后 push 左节点
        stack1.push(root);
        while (stack1.length > 0) {
            root = stack1.pop();
            stack2.push(root);
            if (root.left) {
                stack1.push(root.left);
            }
            if (root.right) {
                stack1.push(root.right);
            }
        }
        while (stack2.length > 0) {
            console.log(s2.pop());
        }
    }
}