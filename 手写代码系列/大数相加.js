function BigSum(a, b) {
    a = '0' + a;
    b = '0' + b;
    let carry = 0,
        res = [];
    var arrA = a.split('')
    var arrB = b.split('')
    var len = Math.max(arrA.length, arrB.length);
    var distance = arrA.length - arrB.length;
    if (distance > 0) {
        for (var i = 0; i < distance; i++) {
            arrB.unshift('0')
        }
    } else {
        for (var i = 0; i < Math.abs(distance); i++) {
            arrA.unshift('0')
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        let sum = Number(arrA[i]) + Number(arrB[i]) + Number(carry);
        carry = sum >= 10 ? 1 : 0;
        // or carry= Math.floor(sum/10)
        sum = sum > 10 ? parseInt(sum % 10) : sum;
        res.push(sum)
    }
    return res.reverse().join('').replace(/^0/, '');
}
console.log(BigSum('9007199254740998883', '1'))
console.log(parseInt(13 % 10));
// 已 12345 和 678 为例
// 我们需要先把他们转换为位数相同，不够补零，记住要统一加一位，为了两个最大的位数相加后可能需要进位
// 12345 =>  012345    678 => 000678
// 然后让各自的个位个位相加，十位与十位相加   5 + 8 = 3  （1为进位） 4 + 7 + 1 = 2 （1）