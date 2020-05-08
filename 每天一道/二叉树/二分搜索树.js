class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}
class BST {
    constructor() {
        this.root = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }
    addNode(v) {
        this.root = this._addChild(this.root, v)

    }
    _addChild(root, v) {
        if (!root) {
            this.size++
                return new Node(v)
        }
        if (root.value > v) {
            this.left = this._addChild(root.left, v)
        } else if (root.value < v) {
            this.right = this._addChild(root.right, v)
        }
        return root;
    }

}