// Web前端事先定义一个用于获取跨域响应数据的回调函数，并通过没有同源策略限制的script标签发起一个请求
// （将回调函数的名称放到这个请求的query参数里），然后服务端返回这个回调函数的执行，并将需要响应的数据放到回调函数的参数里，
// 前端的script标签请求到这个执行的回调函数后会立马执行，于是就拿到了执行的响应数据。
function jsonp(url, callback, success) {
  let script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  window[callback] = function (data) {
    success && success(data);
  };
  document.body.appendChild(script);
}

function jsonp(url, callback) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.body.appendChild(script);
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
    };
  });
}
