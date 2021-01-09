class Event {
  constructor() {
    this.callbacks = {};
  }
  $on(name, fn) {
    if (this.callbacks[name] || (this.callbacks[name] = [])) {
      this.callbacks[name].push(fn);
    }
  }
  $emit(name, args) {
    let cbs = this.callbacks[name];
    if (cbs) {
      cbs.forEach((v) => v.call(this, args));
    }
  }
  $remove(name, fn) {
    this.callbacks[name] = this.callbacks[name].filter((item) => item !== fn);
  }
}
// test
let event = new Event();
event.$on("hook", function (args) {
  console.log("hook", args);
});
event.$on("hook2", function (args) {
  console.log("hook2", args);
});
// event.$remove('hook')
event.$emit("hook", "233");
event.$emit("hook2", "24444");
