function prepend(arr, item) {
    let res = [...arr]
    res.unshift(item)
    return res
}
let res = prepend([1, 2, 3, 4], 10);
console.log(res);