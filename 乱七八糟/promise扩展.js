// const p = new Promise.race([
//     fetch("/resource-that-may-take-a-while"),
//     new Promise(function(resolve, reject) {
//         setTimeout(() => reject(new Error("request timeout")), 5000);
//     }),
// ]);
// p.then((response) => console.log(response));
// p.catch((error) => console.log(error));
const warnDemo = (ctx) => {
    const promise = new Promise((resolve) => {
        resolve(ctx);
        console.log("After resolved, but Run"); // 依然会执行这个语句
    });
    return promise;
};

warnDemo("ctx").then((ctx) => console.log(`This is ${ctx}`));