const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj);
// 如果你有两个名称相同的键，则键会被替换掉。
//它仍然位于第一个键出现的位置，但是值是最后出现那个键的值。
const x = 'lisi';
y = 2;
console.log(delete x);
console.log(global.x);
console.log(global.y);
console.log(delete y);
// false
// undefined
// 2
// true
