// 选择排序
function sort(arr) {
    let len = arr.length;
    let minInx = null;
    for (let i = 0; i < len; i++) {
        minInx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minInx])
                minInx = j
        }
        let temp = arr[minInx];
        arr[minInx] = arr[i];
        arr[i] = temp
    }
    return arr
}
let arr = [1, 5, 9, 12, 0, 3, 0, 0, 0]
console.log(sort(arr));