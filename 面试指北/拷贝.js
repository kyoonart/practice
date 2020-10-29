// 浅拷贝
let a = {
        n: 222,
        a: { a: 1 }
    }
    // let b = Object.assign({}, a)
    // let c = {...a }
    // console.log(b);
    // console.log(c);
let d = JSON.parse(JSON.stringify(a))
console.log(d);