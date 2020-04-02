let arr2 = [1, 2, 3, 2, 33, 55, 66, 3, 55];
let newArr = [];
// 1
arr2.forEach(item => {
    if (newArr.indexOf(item) == '-1') {
        newArr.push(item)
            // console.log(newArr.indexOf(item));
    }
});
// 2
let newArr2 = [...new Set(arr2)]
console.log(newArr2);
// 3
let newArr = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        return pre.concat(cur)
    } else {
        return pre
    }
}, [])