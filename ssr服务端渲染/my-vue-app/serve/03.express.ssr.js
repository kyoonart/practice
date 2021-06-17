const express = require("express");
const path = require("path");
const fs = require("fs");
const server = express();

// 处理 favicon
const favicon = require("serve-favicon");
server.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

// 1 创建vue实例
const Vue = require("vue");

// 2 获取渲染器实例
const { createRenderer } = require("vue-server-renderer");
const renderer = createRenderer();

server.get("*", (req, res) => {
  const template = req.url.substr(1) || "index";
  console.log("template", template);
  const buffer = fs.readFileSync(path.join(__dirname, `./${template}.html`));
  const app = new Vue({
    template: buffer.toString(),
    data() {
      return { message: "hello world ssr" };
    },
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
server.listen(90, () => {
  console.log("server listening on port 90");
});
