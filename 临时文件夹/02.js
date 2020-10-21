function takeLongTime() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    console.log("test1");
    const v = await takeLongTime();
    console.log(v);
    return "test3";
}

test();
console.log("test2");
test().then((v) => console.log(v));



console.log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
    console.log('async1 end')
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function() {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
        console.log('Promise')
        resolve()
    })
    .then(function() {
        console.log('promise1')
    })
    .then(function() {
        console.log('promise2')
    })

console.log('script end')