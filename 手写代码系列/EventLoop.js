console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);
new Promise(resolve => {
        console.log('Promise')
        resolve()
    })
    .then(function() {
        console.log('promise1')
    })
Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});
console.log('script end');
// promise的then才属于微任务 promise中的属于同步任务
// 刚开始整个脚本作为一个宏任务来执行 对于同步代码直接压入执行栈
// 具体执行流程
// + 一开始整段脚本作为第一个宏任务执行
// + 执行过程中同步代码直接执行， 宏任务进入宏任务队列， 微任务进入微任务队列
// + 当前宏任务执行完出队， 检查微任务队列， 如果有则依次执行， 直到微任务队列为空
// + 执行浏览器 UI 线程的渲染工作
// + 检查是否有Web worker任务， 有则执行
// + 执行队首新的宏任务， 回到2， 依此循环， 直到宏任务和微任务队列都为空