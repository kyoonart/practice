console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
// 根据双精度浮点数的定义， Number 类型中有效的整数范围是 - 0x1fffffffffffff 至
// 0x1fffffffffffff， 所以 Number 无法精确表示此范围外的整数。