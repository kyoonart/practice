// var nums = [22, 25, 89, 22, 2255, 2236, 300]
// console.log(Math.min.call(Math, ...nums));
// var obj = {
//     name: 'zhansan',
//     id: 001,
//     tel: 1111111
// }
// console.log(obj['name']);
const a = {
    value: [3, 2, 1],
    valueOf: function() { return this.value.shift(); },
}
let res = (a == 3 && a == 2 && a == 1)
console.log(res); //true