// 发送
window.parent.postMessage('hello', 'https://www.baidu.com');
// 接收
var mc = new MessageChannel();
mc.addEventListener('message', (e) => {
    var origin = e.origin || event.originalEvent.origin;
    if (origin === 'https://www.baidu.com') {
        console.log('ok');
    }
})