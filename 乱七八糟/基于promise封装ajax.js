function ajax(url, method = "get", param = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const paramString = getStringParam(param);
        if (method === "get" && paramString) {
            url.indexOf("?") > -1 ? (url += paramString) : (url += `?${paramString}`);
        }
        xhr.open(method, url);
        xhr.onload = function() {
            const result = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: xhr.getAllResponseHeaders(),
                data: xhr.response || xhr.responseText,
            };
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                resolve(result);
            } else {
                reject(result);
            }
        };
        // 设置请求头
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // 跨域携带cookie
        xhr.withCredentials = true;
        // 错误处理
        xhr.onerror = function() {
            reject(new TypeError("请求出错"));
        };
        xhr.timeout = function() {
            reject(new TypeError("请求超时"));
        };
        xhr.onabort = function() {
            reject(new TypeError("请求被终止"));
        };
        if (method === "post") {
            xhr.send(paramString);
        } else {
            xhr.send();
        }
    });
}

function getStringParam(param) {
    let dataString = "";
    for (const key in param) {
        dataString += `${key}=${param[key]}&`;
    }
    return dataString;
}


const _fetch(url) {
    return new Promise((resolve, reject) => {
        if (window.XMLHttpRequest) {
            const xhr = new XMLHttpRequest();
        } else {
            const xhr = ActiveXObject("Microsoft.XMLHTTP")
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('fail')
                }
            }
        }
        xhr.open('GET', url, false)
        xhr.send()
    })

}


// onreadystatechange 和 onload 的区别是 onload只有当readyState为4才会触发 而 onreadystatechange 当readyState变化了就会触发