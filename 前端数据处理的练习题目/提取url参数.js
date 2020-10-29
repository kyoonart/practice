function serilizeUrl(url) {
    var result = {};
    url = url.split("?")[1];
    var map = url.split("&");
    for (var i = 0, len = map.length; i < len; i++) {
        result[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    return result;
}
let url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx?e';
let result = serilizeUrl(url)
    // console.log(result);
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {}
    );
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