// 需要在webpack.config.js拿到babel的预设, 通过预设转换模块, 先引入babel
const babel = require("@babel/core");
// 拿到babel的参数 需要工具 loaderUtils
const loaderUtils = require("loader-utils");
function loader(source) {
  // loader的参数就是源代码  这里的this就是loader的上下文
  const options = loaderUtils.getOptions(this);
  console.log(this.resourcePath, "=========================="); // [./src/index.js]
  const callback = this.async(); // babel的转换是异步的,同步的返回是不行的， 不能用return  同步就是直接掉用 异步会在async中
  babel.transform(
    source,
    {
      ...options,
      sourceMap: true, // 是否设置sourceMap 还需要再webpack.config.js 中配置  devtool: 'source-map'
      filename: this.resourcePath.split("/").pop(), //  给生成的`source-map`指定名字
    },
    function (err, result) {
      callback(err, result.code, result.map); // 异步 参数分别是「错误 转化后的代码 和 sourceMap」
    }
  );
  console.log(options);
  // return source  失效
}

module.exports = loader;
