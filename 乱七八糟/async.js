async function f() {
    await p;
    console.log("ok");
}
// 可以理解为

function f() {
    return RESOLVE(p).then(() => {
        console.log("ok");
    });
}
// 如果 RESOLVE(p) 对于 p 为 promise 直接返回 p 的话， 那么 p的 then 方法就会被马上调用，
//  其回调就立即进入 job 队列。

// 而如果 RESOLVE(p) 严格按照标准，应该是产生一个新的 promise，尽管该 promise确定会 resolve 为 p，
// 但这个过程本身是异步的，也就是现在进入 job 队列的是新 promise 的 resolve过程，所以该 promise 的
// then 不会被立即调用，而要等到当前 job
//  队列执行到前述 resolve 过程才会被调用，然后其回调（也就是继续 await 之后的语句）
//  才加入 job 队列，所以时序上就晚了。
// 关于微任务 是先进入就会先执行
setImmediate(() => {
    console.log("immediate");
});
setTimeout(() => {
    console.log("timeout");
}, 0);