function count(arr, item) {
    return arr.reduce((init, cur) => { return cur === item ? init + 1 : init }, 0)

}
let res = count([1, 2, 4, 4, 3, 4, 3], 4)
console.log(res);