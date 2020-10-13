function duplicates(arr) {
    let res = []
    arr.map((item, index) => {
        if (res.indexOf(item) == -1) {
            res.push(item)
        }
    })
    return res
}
let res = duplicates([2, 2, 2, 2, 2, 2])
console.log(res);