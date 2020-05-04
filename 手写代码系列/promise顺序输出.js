function p1() {
    return new Promise((resolve, reject) => {
        fs.readfile('./a.js', (err, res) => {
            if (!err) {
                resolve(res)
            }
        })
    })
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readfile('./b.js', (err, res) => {
            if (!err) {
                resolve(res)
            }
        })
    })
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readfile('./c.js', (err, res) => {
            if (!err) {
                resolve(res)
            }
        })
    })
}
p1().then(res => {
    console.log(res);
    return p2
}).then(res => {
    console.log(res);
    return p3
}).then(res => {
    console.log(res);
});
// 顺序执行 es5中只能通过回调函数执行  es7有async await
// generator函数
function* fetch() {
    yield ajax(url, () => {})
    yield ajax(url1, () => {})
    yield ajax(url2, () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()