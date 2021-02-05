// 工厂模式
class Produce {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log("init");
    console.log(this.name);
  }
  func() {
    consle.log("func");
  }
}

class Factory {
  create(name) {
    return new Produce(name);
  }
}
// use
let factory = new Factory();

let p1 = factory.create("p1");
p1.init();
let p2 = factory.create("p2");
