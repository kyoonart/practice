// 可以给匹配到的文件自动加注释
const loaderUtils = require("loader-utils"); // 可以拿到loader配置
const validateOptions = require("schema-utils"); // 校验options是否正确
const fs = require("fs");
function loader(source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  const schema = {
    type: "object",
    properties: {
      text: {
        type: "string",
      },
      filename: {
        type: "string",
      },
    },
  };
  validateOptions.validate(schema, options, "banner-loader"); // 自己的校验格式， 自己的写的配置， 对应的loader名字
  if (options.filename) {
    this.cacheable(false); // 不要缓存  如果有大量计算 推荐缓存
    // this.cacheable && this.cacheable()
    this.addDependency(options.filename); // 自动增加依赖
    fs.readFile(options.filename, "utf8", function (err, data) {
      callback(err, `/**${data}**/${source}`);
    });
  } else {
    callback(null, `/**${options.text}**/${source}`);
  }
  return source;
}

module.exports = loader;
