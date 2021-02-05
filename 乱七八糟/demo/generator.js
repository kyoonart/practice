function* func() {
  console.log("start");
  let x = yield 1;
  console.log("x", x);
  let y = yield 2;
  console.log("y", y);
  // return x + y;
}
let res = func();
console.log(res.next());
console.log(res.next());
console.log(res.next());
// next 函数发挥{value:'',done:false}
//next函数接受的参数值就是value值，会覆盖yeild的值,yeild返回值就是next函数的接受参数，如果没传就是undefined
function* load() {
  loadS();
  yield loadZ();
  loadE();
}
let it = load();
it.next();

function loadS() {
  console.log("数据开始加载");
}
function loadZ() {
  setTimeout(function () {
    console.log("数据加载中");
    it.next();
  }, 1000);
}
function loadE() {
  console.log("数据加载完成");
}
