export default (prams) => {
    return new Promise(resolve, reject) {
        wx.request({
            ...prams,
            success: (result) => {
                resolve(result)
            },
            fail: (res) => {
                reject(res)
            },
            complete: () => {}
        });
    }
}