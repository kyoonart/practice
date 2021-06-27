class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        return this.stack[this.getCount() - 1];
    }
    getCount() {
        return this.stack.length;
    }
    isEnpty() {
        return !!this.stack.length;
    }
}