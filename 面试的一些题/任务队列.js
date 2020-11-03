class Queue {
    constructor() {
        this.queue = [];
    }

    task(delay, callback) {
        this.queue.push({
            delay,
            callback
        });
        return this;
    }

    async start() {
        for (let i = 0; i < this.queue.length; i++) {
            await new Promise((resolve) => {
                setTimeout(resolve, this.queue[i].delay)
            }).then(() => {
                this.queue[i].callback();
            })
        }
    }
}

new Queue()
    .task(1000, () => {
        console.log(1)
    })
    .task(2000, () => {
        console.log(2)
    })
    .task(1000, () => {
        console.log(3)
    })
    .start()


class Queue() {
    constructor() {
        this.queue = []
    }
    task(delay, callback) {
        this.queue.push({ delay, callback })
        return this
    }
    async start() {
        for (let i = 0; i < this.queue.length; i++) {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, this.queue[i].task)
            }).then(() => {
                this.queue[i].callback()
            })
        }
    }
}