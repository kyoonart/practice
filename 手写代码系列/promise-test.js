// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)

// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000);
// Promise.resolve()
//     .then(() => {
//         return new Error('error!!!')
//     })
//     .then((res) => {
//         console.log('then: ', res)
//     })
//     .catch((err) => {
//         console.log('catch: ', err)
//     })
process.nextTick(() => {
    console.log('nextTick')
})
Promise.resolve()
    .then(() => {
        console.log('then')
    })
setImmediate(() => {
    console.log('setImmediate')
})
console.log('end')