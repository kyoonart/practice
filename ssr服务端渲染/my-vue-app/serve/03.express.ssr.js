const express = require("express");
const server = express();

// 1 创建vue实例
const Vue = require("vue");

// 2 获取渲染器实例
const { createRenderer } = require("vue-server-renderer");
const renderer = createRenderer();

server.get("/", function (req, res) {
  const app = new Vue({
    template: "<div> hello world ssr</div>",
  });
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

server.listen(80, () => {
  console.log("server listening on port 80");
});
