function setTimeoutWithParam(delay, result) {
    return () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(result);
            }, delay);
        });
    };
}
multiRequest(
    [
        setTimeoutWithParam(2000, 3),
        setTimeoutWithParam(1000, 1),
        setTimeoutWithParam(2000, 2),
        setTimeoutWithParam(4000, 4),
        setTimeoutWithParam(5000, 5),
        setTimeoutWithParam(6000, 6),
    ],
    5,
    res => {
        if (res === 5) {
            // 增加一个异步请求
            multiRequest.prototype.addUrl(setTimeoutWithParam(100, 7));
        }
        console.log('single', res);
    }
).then(res => {
    console.log('all over', res);
});