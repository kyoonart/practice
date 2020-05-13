// 发送端
window.parent.postMessage('message', 'http://www.test.cn')
    // 接受端
var mv = new MessageChannel()
mv.addEventListener('message', function(e) {
    var origin = e.origin || e.originEvent.origin;
    if (origin === 'http://www.test.cn') {}
    console.log('message');

})