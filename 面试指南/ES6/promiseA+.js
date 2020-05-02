// 手写promise A+规范---简易版 必须掌握
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function Mpromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolovedCallbaks = [];
    that.rejectedCallbacks = [];
    // 定义函数
    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            that.resolovedCallbaks.map(cb => cb(that.value));
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }
    // 执行传入的函数
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
// 实现then
Mpromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };
    if (that.state === PENDING) {
        that.resolovedCallbaks.push(onFulfilled);
        that.rejectedCallbacks.push(onRejected);
    };
    if (that.stat === RESOLVED) {
        onFulfilled(that.value)
    };
    if (that.stat === REJECTED) {
        onRejected(that.value)
    };

}
new Mpromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 0)

}).then(value => {
    console.log(value);
});





const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function Mpromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolovedCallbaks = [];
    that.rejectedCallbacks = [];
    // 定义函数
    function resolve(value) {
        if (value instanceof MyPromise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if (that.state === PENDING) {
                that.state = RESOLVED
                that.value = value
                that.resolvedCallbacks.map(cb => cb(that.value))
            }
        }, 0)
    }

    function reject(value) {
        setTimeout(() => {
            if (that.state === PENDING) {
                that.state = REJECTED
                that.value = value
                that.rejectedCallbacks.map(cb => cb(that.value))
            }
        }, 0)
    }
    // 执行传入的函数
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
// 实现then

Mpromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };
    // 实现兼容多种 `Promise` 的 `resolutionProcedure` 函数
    function resolutionProcedure(promise2, x, resolve, reject) {
        if (promise2 === x) {
            return reject(new TypeError('Error'))
        }
        if (x instanceof MyPromise) {
            x.then(function(value) {
                resolutionProcedure(promise2, value, resolve, reject)
            }, reject)
        };
        let called = false
        if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            try {
                let then = x.then
                if (typeof then === 'function') {
                    then.call(
                        x,
                        y => {
                            if (called) return
                            called = true
                            resolutionProcedure(promise2, y, resolve, reject)
                        },
                        e => {
                            if (called) return
                            called = true
                            reject(e)
                        }
                    )
                } else {
                    resolve(x)
                }
            } catch (e) {
                if (called) return
                called = true
                reject(e)
            }
        } else {
            resolve(x)
        }
    };

    if (that.state === PENDING) {
        return (promise2 = new MyPromise((resolve, reject) => {
            that.resolvedCallbacks.push(() => {
                try {
                    const x = onFulfilled(that.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })
            that.rejectedCallbacks.push(() => {
                try {
                    const x = onRejected(that.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })
        }))
    }
    if (that.state === RESOLVED) { 
        return (promise2 = new MyPromise((resolve, reject) => {  
            setTimeout(() => {   
                try {    
                    const x = onFulfilled(that.value);  
                    resolutionProcedure(promise2, x, resolve, reject) ; 
                } catch (reason) {    
                    reject(reason) ; 
                } 
            })
        }))
    }
}
new Mpromise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 0)

    }).then(value => {
        console.log(value);
    })
    // 手写promise A+规范---完整版


// 三个常量用于表示状态
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this
    this.state = PENDING

    // value 变量用于保存 resolve 或者 reject 中传入的值
    this.value = null

    // 用于保存 then 中的回调，因为当执行完 Promise 时状态可能还是等待中，这时候应该把 then 中的回调保存起来用于状态改变时使用
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []


    function resolve(value) {
        // 首先两个函数都得判断当前状态是否为等待中
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value

            // 遍历回调数组并执行
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    // 完成以上两个函数以后，我们就该实现如何执行 Promise 中传入的函数了
    try {
        fn(resolve, reject)
    }
    cach(e) {
        reject(e)
    }
}

// 最后我们来实现较为复杂的 then 函数
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this

    // 判断两个参数是否为函数类型，因为这两个参数是可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : e =>
        throw e

    // 当状态不是等待态时，就去执行相对应的函数。如果状态是等待态的话，就往回调函数中 push 函数
    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onFulfilled)
        this.rejectedCallbacks.push(onRejected)
    }
    if (this.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (this.state === REJECTED) {
        onRejected(that.value)
    }
}