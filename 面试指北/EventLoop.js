console.log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function() {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
        console.log('Promise')
        resolve()
    })
    .then(function() {
        console.log('promise1')
    })
    .then(function() {
        console.log('promise2')
    });

console.log('script end');
// - 首先执行同步代码，这属于宏任务
// - 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
// - 执行所有微任务
// - 当执行完所有微任务后，如有必要会渲染页面
// - 然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 `setTimeout` 中的回调函数