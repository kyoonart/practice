var http = require("http");
http.createServer(function(req, res) {
    var fileName = "." + req.url;
    if (fileName === "./stream") {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Access-Control-Allow-Origin": '*',
        });
        res.write("retry: 10000\n");
        res.write("event: connecttime\n");
        res.write("data: " + (new Date()) + "\n\n");
        res.write("data: " + (new Date()) + "\n\n");
        interval = setInterval(function() {
            res.write("data: " + (new Date()) + "\n\n");
        }, 1000);

        req.connection.addListener("close", function() {
            clearInterval(interval);
        }, false);
    }
}).listen(8844, "127.0.0.1", function() {
    console.log('运行了');

});

所谓的SSE(Sever - Sent Event), 就是浏览器向服务器发送了一个HTTP请求， 保持长连接， 服务器不断单向地向浏览器推送“ 信息”， 这么做是为了节省网络资源， 不用一直发请求， 建立新连接。

优点： SSE和WebSocket相比， 最大的优势是便利， 服务端不需要第三方组件， 开发难度低， SSE和轮询相比它不用处理很多请求， 不用每次建立新连接， 延迟低。
缺点： 如果客户端有很多需要保持很多长连接， 这回占用大量内存和连接数。