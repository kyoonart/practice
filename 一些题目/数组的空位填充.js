//数组的空位填充
// // 注意，你要原地修改原先的数组，而不是返回一个新的数组。
// const fillEmpty = (arr) => {
//     console.log(arr, "---", Array.from(arr));

//     return Array.from(arr).map((item, inx) => (inx in arr ? item : "hello"));
// };
const fillEmpty = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i in arr);

        if (!(i in arr)) arr[i] = "hello";
    }
    return arr;
};
console.log(fillEmpty([, 2, 3, , undefined, , ,]));
