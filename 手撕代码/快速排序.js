var arr = [3, 1, 4, 6, 5, 7, 2];

function quickSort(arr) {
    if (arr.length == 0) {
        return []; // 返回空数组
    }
    var cIndex = Math.floor(arr.length / 2);
    var c = arr.splice(cIndex, 1);
    var l = [];
    var r = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < c) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }
    return quickSort(l).concat(c, quickSort(r));
}
console.log(quickSort(arr));





















var arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log('arr:' + arr); //打印排序前的数组
quickSort(arr, 0, arr.length - 1);
console.log('sortArr:' + arr); //打印排序后的数组
const visualize = () => {
    function quickSort(arr, low, high) { //数组  排序部分的初始索引  排序部分的结尾索引
        var key = arr[low]; //设置起始索引值为基准值
        var start = low;
        var end = high;
        while (end > start) {
            while (end > start && arr[end] >= key) end--; //从右侧开始搜索
            if (arr[end] < key) { //需要判断，因为可能右侧没有比基准值小的
                var temp = arr[end];
                arr[end] = arr[start];
                arr[start] = temp;
            }
            while (end > start && arr[start] <= key) start++;
            if (arr[start] > key) { //可能左侧没有比基准值大的
                var temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
            }

        }
        console.log('newArr:' + arr); //每次排完打印一次，显示几条就说明排了几次
        //排完后start等于end，即基准值在此次排序中的最终位置
        if (start > low + 1) { quickSort(arr, low, start - 1) };
        //如果start小等于low+1，说明左侧只有0或者1个数字，不需要再进行排序
        if (end < high - 1) { quickSort(arr, end + 1, high) };
        //同理可得
        return arr;
    }
}