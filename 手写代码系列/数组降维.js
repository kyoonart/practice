const arr = [2, 5, [7, 8, [2, 3, 1, [3, 9, 8, [2, 8]]]]];
// Es6
let res = flat(arr)
console.log(res);

console.log(arr.join(',').split(',').map(item => Number(item)));

function flat(arr) {
    let res = [];
    for (const item of arr) {
        item instanceof Array ? res = res.concat(flat(item)) : res.push(item)
    }
    return res
}
console.log(flat(arr));



function _flat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(cur instanceof Array ? flat(cur) : cur)
    }, [])
}
console.log(_flat(arr));



function __flat(arr) {

    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(__flat(arr));