class Dep {
    constructor() {
        this.subscribes = []
    }
    addSub(sub) {
        this.subscribes.push(sub)
    }
    notify() {
        this.subscribes.forEach((sub) => {
            sub.update()
        })
    }
}
//订阅者
class Watcher {
    constructor() {
        //保存当前观察者到
        Dep.target = this
    }
    update() {
        //订阅者收到数据更新的消息，更新视图
        console.log("watcher视图更新")
    }
}

function observer(value) {
    if (!value || typeof value !== 'object') {
        return
    }
    for (key in value) {
        if (value && typeof value[key] === 'object') {
            observer(value[key])
        } else {
            defineReactive(value, key, value[key])
        }
    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function getterReactive() {
            //收集订阅者
            dep.addSub(Dep.target)
            return val
        },
        set: function setterReactive(newValue) {
            if (newValue === val) return
            val = newValue
                //发布者发布消息到订阅者中心，订阅者中心发布消息给订阅者
            dep.notify()
        }
    })
}
class Vue {
    constructor(options) {
        this.data = options.data()
        observer(this.data)
            //为当前vue实例设置一个订阅者，当前订阅者保存在Dep.target里面
        new Watcher()
            //把当前订阅者放到test这个属性的订阅者中心，如果有多个属性，需要存放到多个属性的订阅者中心，即有一个属性改变，就提示当前实例的订阅者要进行视图更新
        console.log('触发getter', this.data.test)
    }
}
let observerVue = new Vue({
            data() {
                return {
                    test: 1
                }
            })