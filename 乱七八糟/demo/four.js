// 需要实现的函数
function repect(func, times, wait) {
  return function (...args) {
    for (let i = 0; i < times; i++) {
      setTimeout(() => func.apply(null, args), wait * (i + 1));
    }
  };
}
// 使下面代码能正常工作
const repectFunc = repect(console.log, 4, 3000);

repectFunc("helloworld"); //会输出 4 次 hellworld，每次间隔 3 秒
