let obj = {
    red_apple: '111',
    blue_apple: {
        green_apple: {
            orange_apple: '222'
        }
    }
}

function fn(str) {
    let arr = str.split('_');
    let res = arr.map((item, index) => {
        return index == 0 ? item : item[0].toUpperCase().concat(item.slice(1, item.length))
    })
    return res.join('')

}
let kk = []

function getName(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            getName(obj[key])
        }
        kk.push(key)
    }
}
getName(obj)
let res = []
kk.forEach(item => {
    res.push(fn(item))
});
console.log(res);