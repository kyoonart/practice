let list = [1, 5, 6, 2, 9, 2, 6, 52323, 11, 1]
let newList = []
list.forEach((item) => {
    setTimeout(() => {
        newList.push(item)
        if (newList.length === list.length) {
            console.log(newList);
        }
    }, item * 100)
})
var arr = [4, 2, 7, 5, 6, 0, 8];
var sleepSort = function(arr, callback) {
        let res = [];
        arr.forEach(item => {
            setTimeout(() => {
                res.push(item)
                    // 如果执行完毕，回调
                if (res.length === arr.length) callback(res);
            }, item)
        });
    }
    // sleepSort(arr, res => { console.log(res) })