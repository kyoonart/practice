const fs = require("fs");
const path = require("path");
// `parse`方法主要靠解析语法树来进行转义
// `babylon`  主要把源码转成ast Babylon 是 Babel 中使用的 JavaScript 解析器。
// `@babel/traverse` 对ast解析遍历语法树 负责替换，删除和添加节点
// `@babel/types` 用于AST节点的Lodash-esque实用程序库
// `@babel/generator` 结果生成
const babylon = require("babylon");
const traverse = require("@babel/traverse").default;
const type = require("@babel/types");
const generator = require("@babel/generator").default;
class Compiler {
  constructor(config) {
    // entry output
    this.config = config;
    this.entryId;
    // 需要所有模块的依赖
    this.modules = {};
    this.entry = config.entry;
    // 工作路径
    this.root = process.cwd();
  }
  getSource(moudlePath) {
    return fs.readFileSync(moudlePath, "utf8");
  }
  // 解析源码   ast解析语法树
  parse(source, parentPath) {
    const ast = babylon.parse(source);
    const dependencies = [];
    traverse(ast, {
      CallExpression(p) {
        let node = p.node; //对应的节点
        if (node.callee.name === "require") {
          node.callee.name = "__webpack_require__";
          let moduledName = node.arguments[0].value; // 取到模块的引用名字
          moduledName = moduledName + (path.extname(moduledName) ? "" : ".js"); // ./a.js
          moduledName = "./" + path.join(parentPath, moduledName); // './src/a.js'
          dependencies.push(moduledName);
          node.arguments = [type.stringLiteral(moduledName)]; // 改掉源码
        }
      },
    });
    let sourceCode = generator(ast).code;
    return { sourceCode, dependencies };
  }
  buildModule(moudlePath, isEntry) {
    // 模块的内容
    const source = this.getSource(moudlePath);
    // 模块的id  path.relative 拿到相对路径
    const moudleName = "./" + path.relative(this.root, moudlePath);
    // 保存入口的名字
    if (isEntry) this.entryId = moudleName;
    // 解析 对源码进行改造
    const { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moudleName)
    );
    console.log("sourceCode", sourceCode, "dependencies", dependencies);
    this.modules[moudleName] = sourceCode;
  }
  emitFile() {}
  run() {
    // 执行 创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true);
    // 发射一个文件、打包后的文件
    this.emitFile();
  }
}
module.exports = Compiler;
