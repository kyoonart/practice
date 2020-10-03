// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
// const doublePrice = () => {
//     return Object.entries(prices).map(([key, value]) => [key, value * 2])
// }
// let res = doublePrice()
// console.log(res.banana);


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
// Object.fromEntries() 方法把键值对列表转换为一个对象。
let doublePrices = Object.fromEntries(
    // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8