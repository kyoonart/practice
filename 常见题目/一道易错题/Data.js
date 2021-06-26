console.log(Date.now()); // 获取当前毫秒数
var dt = new Date(); // 获取当前时间
console.log(dt.getTime()); // 当前时间的毫秒数
console.log(dt.getFullYear()); //  年
console.log(dt.getMonth() + 1); // 月（0-11）
console.log(dt.getDate()); // 日（0-31）
console.log(dt.getHours()); // 时（0-23）
console.log(dt.getMinutes()); // 分（0-59）
console.log(dt.getSeconds()); // 秒（0-59）
console.log(Date.parse('2000-12-1'));
// 打乱数组
function fixSort(arr) {
    return arr.sort(function() {
        return Math.random() - 0.5
    })
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(fixSort(arr));

function randomStr(len) {
    var random = Math.random();
    random = random + '0000000000'; // 防止自动生成的数字不满足长度报错并且强制转换成字符串
    return random.substr(0, len)
}