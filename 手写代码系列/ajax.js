/** 1. 创建连接 **/
var xhr = null;
xhr = new XMLHttpRequest()
    /** 2. 连接服务器 **/
xhr.open('get', url, true)
    /** 3. 发送请求 **/
xhr.send(null);
/** 4. 接受请求 **/
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            success(xhr.responseText);
        } else {
            /** false **/
            fail && fail(xhr.status);
        }
    }
}