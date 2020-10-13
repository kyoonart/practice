function duplicates(arr) {
    let res = []
    arr.map((item, index) => {
        if (res.indexOf(item) == -1) {
            res.push(item)
        }
    })

    return res

}
let res = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, 45, 45, 45, 32, 23, 11, 2, 0])
console.log(res);