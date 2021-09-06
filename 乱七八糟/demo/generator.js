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
function load1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
}
function load2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 1000);
  });
}
async function test() {
  let a = await load1();
  let b = await load2();
  console.log(a, b);
}
test();
// 类似co模块
function run(generator) {
  let gen = generator();
  function step(val) {
    let res = gen.next(val);
    if (res.done) return res.value;
    res.value.then((val) => {
      step(val);
    });
  }
  step();
}

function* myGenerator() {
  console.log(yield Promise.resolve(1)); //1
  console.log(yield Promise.resolve(2)); //2
  console.log(yield Promise.resolve(3)); //3
}
run(myGenerator);

function co(generator) {
  let gen = generator();
  function step(res) {
    if (res.done) return res.value;
    res.value.then((val) => {
      step(gen.next(val));
    });
  }
  step(gen.next());
}
co(myGenerator);


4. 理解 async、await
一句话，async、await 是 co 库的官方实现。也可以看作自带启动器的 generator 函数的语法糖。不同的是，async、await 只支持 Promise 和原始类型的值，不支持 thunk 函数。

// generator with co
co(function* () {
  try {
    const content1 = yield readFileWithPromise('/etc/passwd', 'utf8')
    console.log(content1)
    const content2 = yield readFileWithPromise('/etc/profile', 'utf8')
    console.log(content2)
    return 'done'
  } catch (err) {
    console.error(err)
    return 'fail'
  }
})

// async await
async function readfile() {
  try {
    const content1 = await readFileWithPromise('/etc/passwd', 'utf8')
    console.log(content1)
    const content2 = await readFileWithPromise('/etc/profile', 'utf8')
    console.log(content2)
    return 'done'
  } catch (err) {
    throw(err)
  }
}
readfile().then(
  res => console.log(res),
  err => console.error(err)
)