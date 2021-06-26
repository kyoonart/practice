class Event {
  constructor() {
    this.callback = {};
  }
  $on = function (name, fn) {
    if ((this.callback[name] || this.callback[name] = [])) {
      this.callback[name].push(fn);
    }
  };
  $emit = function (name, args) {
    let cbs = this.callback[name];
    cbs && cbs.forEach((fn) => fn.call(this, args));
  };
  $remove = function (name, fn) {
    this.callback[name] = this.callback[name].filter((item) => item !== fn);
  };
}
