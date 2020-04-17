const http = require('http');
const app = http.createServer((req, res) => {
    res.end('hello')
    console.log('233');
});

app.listen(3000, () => {
    console.log('启动了');

})