class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  isEmpty(root) {
    return root.length === 0;
  }
  push(node) {
    this.stack1.push(node);
  }
  pop() {
    while (!this.isEmpty(this.stack1)) {
      this.stack2.push(this.stack1.pop());
    }
    let popVal = this.stack2.pop();
    while (!this.isEmpty(this.stack2)) {
      this.stack1.push(this.stack2.pop());
    }
    return popVal || null;
  }
}
let queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue);
console.log(queue.pop());
console.log(queue);
