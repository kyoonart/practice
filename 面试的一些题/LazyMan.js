class LazyManClass {
  constructor(name) {
    this.name = name;
    console.log(`i am ${name}`);
    this.queue = [];
    setTimeout(() => {
      this.next();
    }, 0);
  }
  eat(food) {
    var that = this;
    var fn = function () {
      console.log(`I am eating ${food}`);
      that.next();
    };
    this.queue.push(fn);
    return this;
  }
  sleep(time) {
    var fn = () => {
      // 等待了10秒...
      setTimeout(() => {
        console.log(`等待了${time}秒`);
        this.next();
      }, 1000 * time);
    };
    this.queue.push(fn);
    return this;
  }
  sleepFirst(time) {
    var fn = () => {
      // 等待了5秒...
      setTimeout(() => {
        console.log(`等待了${time}秒`);
        this.next();
      }, 1000 * time);
    };
    this.queue.unshift(fn);
    return this;
  }
  next() {
    let fn = this.queue.shift();
    fn && fn();
  }
}
function LazyMan(name) {
  return new LazyManClass(name);
}
LazyMan("Jack").eat("lunch").sleep(1).eat("dinner").sleepFirst(2);
