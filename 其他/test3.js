function Power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent === 1) {
        return base;
    }

    const isNegative = exponent < 0; // 是否是负指数
    let absExponent = Math.abs(exponent);
    let result = 1;
    while (absExponent) {
        // 如果exponent最右位是1，将当前base累乘到result
        if (absExponent & 1) {
            result = result * base;
        }

        base = base * base; // base自乘法
        absExponent = Math.floor(absExponent / 2); // exponent右移1位
    }

    return isNegative ? 1 / result : result;
}
console.log(Power(2, 3));