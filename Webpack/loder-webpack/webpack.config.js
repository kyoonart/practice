const path = require("path");
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
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
