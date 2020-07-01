class PriorityQueue {
    constructor() {
        this.arr = [];
    }
    add(num) {
        this.arr.push(num);
    }
    remove() {
        let num = Math.max(...this.arr);
        this.arr.splice(this.arr.indexOf(num), 1);
        return num;
    }
}

var abs = new PriorityQueue();
abs.add(2);
abs.add(3);
abs.add(4);
console.log(abs.remove());
console.log(abs.remove());
