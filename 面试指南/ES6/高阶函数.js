const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr = arr1.filter((item, index, array) => {

    return array.indexOf(item) == index
});
// console.log(arr);
// 去重
function add() {
    let sum = 0;
    return function(x) {
        return sum += x
    }
}
let fn = add();
console.log(fn(1));
console.log(fn(2));
console.log(fn(3));
// let b = add(2);
// console.log(a(2)(2));