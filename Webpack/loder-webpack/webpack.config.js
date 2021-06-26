const path = require("path");
const DonePlugin = require("./plugins/DonePlugins");
const AsyncPlugins = require("./plugins/AsyncPlugins");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],

    // 别名
    //   alias: {
    //     loader1: path.resolve(__dirname, "loaders", "loader1"),
    //   },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "banner-loader",
          options: {
            text: "may",
            filename: path.resolve(__dirname, "./src", "banner.js"),
          },
        },
      },
      {
        test: /\.png$/,
        // 目的是根据图片生成md5 发射到dist目录下，file-loader 返回当前图片路径
        // use: 'file-loader'
        // 处理路径
        use: {
          loader: "url-loader1",
          options: {
            limit: 200 * 1024,
          },
        },
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //     },
      //   },
      // },
    ],
    plugins: [new DonePlugin(), new AsyncPlugins()],
  },
};
