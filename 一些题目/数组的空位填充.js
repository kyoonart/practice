//数组的空位填充
// 注意，你要原地修改原先的数组，而不是返回一个新的数组。
const fillEmpty = (arr) => {
    console.log(arr);

    return Array.from(arr).map((item, inx) => (inx in arr ? item : "hello"));
};
console.log(fillEmpty([, 2, 3, , , , ,]));
