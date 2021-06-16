const express = require("express");
const server = express();

// 1 创建vue实例
const Vue = require("vue");
const app = new Vue({
  template: "<div> hello world</div>",
});
// 2 获取渲染器实例
const { createRenderer } = require("vue-server-renderer");
const renderer = createRenderer();
// 3 用渲染器渲染vue实例
renderer
  .renderToString(app)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

server.get("/", function (req, res) {
  res.send("hello world");
});
server.listen(80, () => {
  console.log("server listening on port 80");
});
