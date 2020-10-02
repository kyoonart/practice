let range = { start: 1, to: 10 };
//  1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {
    // 返回一个迭代器对象
    return {
        current: this.start,
        last: this.to,
        // 3. next() 在 for..of 的每一轮循环迭代中被调用
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}
for (let num of range) {
    console.log(num);
}