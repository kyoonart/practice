// function Fibonacci(n) {
//     if (n === 0 || n === 1)
//         return n;
//     else {
//         return Fibonacci(n - 1) + Fibonacci(n - 2);
//     }

// }
function Fibonacci(n) {
    let r = 0;
    let sum = 1;
    for (let i = 0; i < n; i++) {
        sum += r;
        r = sum - r;
    }
    return r;
}
console.log(Fibonacci(20));