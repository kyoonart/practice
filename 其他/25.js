// function Add() {
//     var a = 10;

//     function cat() {
//         a++;
//         console.log(a);
//     }
//     return cat
// }
// Add();
// Add();
// Add();
var a = 10;

function Add3() {
    var a = 10;
    return function() {
        a++;
        return a;
    };
};
var cc = Add3();
console.log(cc());
console.log(cc());
console.log(cc());
console.log(a);