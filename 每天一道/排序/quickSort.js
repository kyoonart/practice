function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let flag = arr.shift();
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > flag) {
            right.push(arr[i])
        }
        if (arr[i] < flag) {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(flag, quickSort(right))
}

let arr = [1, 0, 3, 10, 6, 4, -5]
console.log(quickSort(arr));
// 不需要额外的空间版本
function quickSort1(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return
    let left = low;
    let right = high
    let flag = arr[left];
    while (left < right) {
        if (left < right && arr[right] >= flag) right--;
        arr[left] = arr[right]
        if (left < right && arr[left] <= flag) left++;
        arr[right] = arr[left]
    }
    arr[left] = flag;
    quickSort1(arr, low, left - 1)
    quickSort1(arr, left + 1, high)
    return arr
};
console.log(quickSort1(arr));
// 优化思路 不要选择第一个数作为排序的中轴  1： 随机数 2：三平均法  第一个 最后一个  中间的那个 相加取平均数