function middleFind(arr, target) {
    if (arr.length == 0) return
    let low = 0
    let high = arr.length - 1
    var count = 0;
    while (low <= high) {
        count++
        let middle = Math.floor((low + high) / 2);
        if (arr[middle] < target) {
            low = middle + 1
        } else if (arr[middle] > target) {
            high = middle - 1
        } else {
            console.log(middle);
            // 查找到的位置
            return
        }
    }

}
var a = [0, 12, 2, 3, 4, 595, 6, 96, 8];
middleFind(a, 96)