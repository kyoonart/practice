function fn(root) {
    let ins = [];
    let stack = [];
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        ins.push(root.val);
        root = root.right;
    }
    return ins;
}