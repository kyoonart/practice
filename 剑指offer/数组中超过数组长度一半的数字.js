function MoreThanHalfNum_Solution(numbers) {
    var str = numbers.join('');
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }
    let max = 0;
    var k = '';
    for (var key in obj) {
        // console.log(key);
        if (obj[key] > max) {
            max = obj[key]
            k = key;
        }
    }
    return (max > str.length / 2) ? k - 0 : 0
}
var arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(typeof MoreThanHalfNum_Solution(arr));
//把数组转换为字符串然后使用一个对象把各个数字出现的次数存起来 在遍历整个对象就可以找出某个数字的最大出现次数