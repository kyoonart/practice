function hasGroupsSizeX(arr) {
    if (arr.length < 2) {
        // 小于2项直接返回false
        return false;
    }
    // num用于存放数组中相同数字的个数
    let num = [];
    // 对传入的数组排序
    arr.sort();
    // 遍历整个数组
    for (let i = 0, j = 1, len = arr.length; i <= len - 1; i++) {
        // 两个数组元素相等时计数器++，不相等时将相等个数存入num中
        if (arr[i] === arr[i + 1]) {
            j++;
            // 判断是否已经遍历到倒数第二个元素
            if (i === len - 2) {
                // 是，则将最后一个数字的个数存入num中
                num.push(j);
            }
        } else {
            num.push(j);
            j = 1;
        }
    }
    // 求最大公因数的函数
    let gcd = (a, b) => {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    console.log(num);
    // 当num的长度大于1时进入循环
    while (num.length > 1) {
        // 从num的开头取出两个元素并求最大公因数
        let a = num.shift();
        let b = num.shift();
        let v = gcd(a, b);
        // 最大公因数等于1则直接返回false
        if (v === 1) {
            return false;
        }
        // 不等于1则将最大公因数放回到数组的开头
        num.unshift(v);
    }
    return true;

}
var arr = [1, 1, 2, 2, 2, 2, 3, 3];
console.log(hasGroupsSizeX(arr));