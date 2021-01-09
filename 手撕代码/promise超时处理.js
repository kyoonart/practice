// promise async

const { log } = require("console");

cosnt myFetch = async(ayn) => {
        let start = new Date().getTime();
        let result = await (await fetch(url)).json();
        let time = new Date().getTime() - start;
        if (time > ayn) {
            console.log('超时了');
        } else return result;
    }
    // 利用promise.race
const Fetch = (ayn) => {
    return Promise.race([
        new Promise((resolve, reject) => {
            setTimeout(() => resolve('超时了'), ayn)
        }),
        fetch(url, { headers: { "content-type": "application/text" } })
        .then(res.res.json()).then(
            res => {
                resolve(res);
            })
    ])
}



async function   timeoutM(url, timeout){
    let start = new Date().getTime();
    let result = await fetch(url).json()
    let end = new Date().getTime()
    if(end-start>timeout){
        console.log('Timeout')
    }
    else return result;
}