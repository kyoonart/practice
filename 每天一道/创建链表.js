class Node {
    constructor(value) {
        this.value = value
        this.nexy = undefined
    }
};
class NodeList {
    constructor(arr) {
        let Head = new Node(arr.shift());
        let next = Head
        arr.forEach(item => {
            next.next = new Node(item);
            next = next.next
        })
        return Head
    }
}