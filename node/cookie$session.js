const http = require('http');
http.createServer((req, res) => {
    if (req.url === './favicon.ico') {
        res.end('');
        return
    }
    console.log('cookie', req.headers.cookie);
    res.setHeader('Set-Cookie', 'cookie="233"')
    res.end('hello.....')

}).listen(3000, () => {
    console.log('启动了');

})