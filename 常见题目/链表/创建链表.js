class Node {
    constructor(value) {
        this.value = value
        this.next = undefined
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
var a = new NodeList([1, 2, 3, 5, 4, 5, 6, 5])
console.log(a);