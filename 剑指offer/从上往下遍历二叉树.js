function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function createTree(n) {
    if (n === 1) {
        return new TreeNode(1);
    }
    const root = new TreeNode(n);
    root.left = createTree(n - 1);
    root.right = createTree(n - 1);
    return root;
}
const tree = createTree(4);
console.log(tree);

/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function PrintFromTopToBottom(root) {
    const queue = [],
        res = [];
    if (root === null) {
        return res;
    }
    queue.push(root);
    while (queue.length) {
        const pRoot = queue.shift();
        if (pRoot.left !== null) {
            queue.push(pRoot.left);
        }
        if (pRoot.right !== null) {
            queue.push(pRoot.right);
        }
        res.push(pRoot.val);
    }
    return res;
}
const result = PrintFromTopToBottom(tree);
// console.log(result);