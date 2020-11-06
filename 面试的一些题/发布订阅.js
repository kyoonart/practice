class Event {
    constructor() {
        this.callback = {}
    }
    $on(name, fn) {
        if ((this.callback[name]) || (this.callback[name] = [])) {
            this.callback[name].push(fn)
        }
    }
    $emit(name, args) {
        let cbs = this.callback[name]
        if (cbs) {
            cbs.forEach(cb => cb.call(this, args))
        }
    }
    $remove(name, fn) {
        this.callback[name] = this.callback[name].filter(item => item !== fn)
    }
}