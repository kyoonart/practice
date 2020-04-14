const getJson = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if (this.readyState !== 4) {
                return
            } else if (this.readyState == 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            };
        };
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = handler;
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send()

    })
    return promise
}