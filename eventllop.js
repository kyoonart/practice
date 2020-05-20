// async function async1() {
//     console.log("async1 start"); // 2
//     await async2();
//     console.log("async1 end"); //6
//     return 'async return';
// }

// async function async2() {
//     console.log("async2"); // 3
// }

// console.log("script start"); //  1

// setTimeout(function() {
//     console.log("setTimeout"); //9
// }, 0);

// async1().then(function(message) { console.log(message) }); //8

// new Promise(function(resolve) {
//     console.log("promise1"); //4
//     resolve();
// }).then(function() {
//     console.log("promise2"); //7
// });

// console.log("script end"); //5
async function async1() {
    console.log('async1 start') //2  
        // 执行async2函数的 setTimeout
    await async2()
    setTimeout(function() {
        // 等上面执行完在执行
        console.log('setTimeout1') //8
    }, 0)
}
async function async2() {
    setTimeout(function() {
        console.log('setTimeout2') //7
    }, 0)
}
console.log('script start') //1    //执行同步代码
setTimeout(function() {
    // 最后执行setTimeout
    console.log('setTimeout3') //6
}, 0)
async1() //调用 
    //执行先执行同步 输出2

// 调用
// 执行异步setTimeout
new Promise(function(r, j) {
    console.log('Promise1') //3  //按照代码顺序
    r()
}).then(function() {
    // 等主线任务完成在执行
    console.log('Promise2') //5

})
console.log('script end') //4




// 暂告一段落