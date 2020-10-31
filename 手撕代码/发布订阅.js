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
    $remove(name) {
        this.callback[name] = null
    }
}

// test
let event = new Event()
event.$on('hook', function(args) {
    console.log('hook', args);

})
event.$on('hook2', function(args) {
        console.log('hook2', args);
    })
    // event.$remove('hook')
event.$emit('hook', '233')
event.$emit('hook2', '24444')