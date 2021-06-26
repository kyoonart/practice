// 拿到babel的参数 需要工具 loaderUtils
const loaderUtils = require("loader-utils");
const mime = require("mime"); // 途是设置某种扩展名的文件的响应程序类型

function loader(source) {
  // loader的参数就是源代码
  const { limit } = loaderUtils.getOptions(this);
  console.log(this.resourcePath);
  if (limit && limit > source.length) {
    return `module.exports="data:${mime.getType(
      this.resourcePath
    )};base64,${source.toString("base64")}"`;
  } else {
    return require("./file-loader1").call(this, source);
  }
}
loader.raw = true; // 二进制
module.exports = loader;
