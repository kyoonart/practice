function insertSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break;
            }
        }
    }
    return arr;
}
let arr = [1, 0, 3, 10, 6, 4, -5]
console.log(insertSort(arr));