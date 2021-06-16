const express = require("express");
const server = express();

// 1 创建vue实例
const Vue = require("vue");

// 2 获取渲染器实例
const { createRenderer } = require("vue-server-renderer");
const renderer = createRenderer();
const app = new Vue({
  template: "<div>{{message}}</div>",
  data() {
    return { message: "hello world ssr" };
  },
});
server.get("/", (req, res) => {
  renderer
    .renderToString(app)
    .then((html) => {
      res.send(html);
    })
    .catch((err) => {
      res.status(500).send("Error rendering 500");
    });
});
// 3 用渲染器渲染vue实例
server.listen(90, () => {
  console.log("server listening on port 90");
});
