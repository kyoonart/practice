const single = (function () {
  let instance = null;
  function Person() {
    this.name = "pengtao";
  }
  return function () {
    if (!instance) instance = new Person();
    return instance;
  };
})();
let p1 = new single();
let p2 = new single();
console.dir(p1, p2);
console.log(p1 == p2);
