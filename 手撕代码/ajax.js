/** 1. 创建连接 **/
var xhr = null;
xhr = new XMLHttpRequest()
    /** 2. 连接服务器 true（异步）或 false（同步）**/
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

// var xhr = ActiveXObject("Microsoft.XMLHTTP")
;###
各个状态码的意思
0: 请求未初始化  
1: 服务器连接已建立  
2: 请求已接收  
3: 请求处理中  
4: 请求已完成, 且响应已就绪



function ajax(method,url,data){
    let xhr = new XMLHttpRequest();
    xhr.open(method,url);
    if(method==='POST'){
        xhr.send(data);
    }else{
        xhr.send();
    }
    xhr.onload=function(){
        return new Promise((resolve, reject)=>{
            if(xhr.status ===200){
                resolve(xhr.responseText);
            }else {
                reject(xhr.responseText);
            }

        })
    }

}