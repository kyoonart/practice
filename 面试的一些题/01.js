function delay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve()
        }, delay)
    })
}
delay(3000).then(() => console.log(1))