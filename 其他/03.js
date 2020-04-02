// function callSomeFunc(someFunc, someArg) {
//     return someFunc(someArg)
// }

// function sum(num) {
//     return num + 10
// };
// var result = callSomeFunc(sum, 20)
// console.log(result); //30
function add() {
    console.log(this);
};
var obj = {
    say: () => {
        console.log(this);
    }
}
add();
console.log('-- -- -- -- -- -- --');
window.say()