function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    console.log('test1');
    const v = await takeLongTime();
    console.log(v);
    return 'test3'
}

test();
console.log('test2');
test().then((v) => console.log(v))