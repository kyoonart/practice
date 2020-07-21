const pause = async (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
async function run() {
    console.log("Hello");
    await pause(5000); // 续一秒
    console.log("World"); // 一秒以后继续运行
}
run();
