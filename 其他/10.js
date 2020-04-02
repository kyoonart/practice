function sort(arr) {
    for (let i = 0, temp; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++)
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
    }
    return arr
}
let arr = [1, 5, 9, 12, 0, 3, 0, 0, 0]
console.log(sort(arr));
// 冒泡排序