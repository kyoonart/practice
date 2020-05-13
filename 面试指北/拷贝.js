// 浅拷贝
let a = {
    n: 222
}
let b = Object.assign({}, a)
let c = {...a }
console.log(b);
console.log(c);