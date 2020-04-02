// setTimeout(() => {
//     console.log('timer1')
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
// }, 0)
// setTimeout(() => {
//     console.log('timer2')
//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
// }, 0)
Promise.resolve().then(() => {
    console.log('Promise1')
    setTimeout(() => {
        console.log('setTimeout2')
    }, 0)
});
setTimeout(() => {
    console.log('setTimeout1')
    Promise.resolve().then(() => {
        console.log('Promise2')
    })
}, 0);
console.log('start');