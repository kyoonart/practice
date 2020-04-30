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
let unique = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        return pre.concat(cur)
    } else {
        return pre
    }
}, []);
// 换个写法
function unique(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
//4 
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
// 5  这个还可以和换成map结构数组形式
function unique(arr) {
    let obj = {}
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
            newArr.push(arr[i])
        } else {
            arr[arr[i]]++

        }
    }
    return newArr;
}