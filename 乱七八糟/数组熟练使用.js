//将 border-left-width 转换成 borderLeftWidth
const camelize = (str) => {
        return str.split('-').map((word, index) => {
            return index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        }).join('')
    }
    // console.log();
    // console.log(camelize("background-color-color"));
    //写一个函数 filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大小在 a 和 b 之间的元素，并返回它们的数组。
    // 该函数不应该修改原数组。它应该返回新的数组。
let filterRange = (arr, a, b) => {
    return arr.filter(item => {
        return item >= a && item <= b
    })
}
let resp = filterRange([1, 2, 3, 4, 5], 2, 4)
    // console.log(resp);
    // 数组打乱算法
let shuffle = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
let arrtest = [1, 5, 9, 12, 0, 3, 0, 0, 0]
console.log(shuffle(arrtest));