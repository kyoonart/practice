function GoddBubleSort(arr) {
    var flag;
    for (let i = 0; i < arr.length && flag == 0; i++)
        flag = 1;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            flag = 0;
        }
    }
}
// 快速排序也是冒泡排序的一种改进