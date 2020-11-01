var sleepSort = function(arr, callback) {
    let res = [];
    arr.forEach((item) => {
        setTimeout(() => {
            res.push(item);
            if (res.length === arr.length) callback(res);
        }, item);
    });
};
let arr = [1, 8, 2, 6, 2, 3, 22, 63, 10];
console.time("A");
sleepSort(arr, (res) => {
    console.log(res);
});
console.timeEnd("A");