class Wather {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.oldval = this.getOldval()
    }
    getOldval() {
        Dep.target = this
        const oldval = compileUtil.getval(this.expr, this.vm);
        Dep.target = null
        return oldval;
    }
    update() {
        const newval = compileUtil.getval(this.expr, this.vm);
        if (newval !== this.oldval) {
            this.cb(newval)
        }
    }
}

class Dep {
    constructor() {
            this.subs = []
        }
        // 收集观察者
    addSubs(wather) {
            this.subs.push(wather)
        }
        //通知观察者去更新视图
    notify() {
        console.log('通知了观察者', this.subs);
        this.subs.forEach(w => w.update())
    }


}

class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        if (data && typeof data === 'object')
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key])
            })
    }
    defineReactive(obj, key, value) {
        // 递归
        this.observer(value)
        const dep = new Dep()
            // 劫持并监听所有的属性
        Object.defineProperty(obj, key, {

            enumerable: true,
            configurable: false,
            get() {
                // 订阅数据变化的时候 往Dep中添加观察者
                Dep.target && dep.addSubs(Dep.target)
                return value
            },
            set: (newval) => {
                this.observer(newval)
                if (newval !== value) {
                    value = newval;
                }
                // 通知Dep变化了
                dep.notify()
            }
        })
    }
}