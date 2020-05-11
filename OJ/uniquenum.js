const uniqueNums = (n) => {
    let arr = [];
    for (let i = 2; i <= 32; i++) {
        arr.push(i);
    }
    return arr.sort(() => Math.random() - 0.5).slice(0, n);
}

function uniqueNumss(n) {
    let arr = Array(31).fill(1).map((item, index) => {
        return index + 2
    })
    return arr.sort(() => Math.random() - 0.5).slice(0, n)
}
console.log(uniqueNumss(23));