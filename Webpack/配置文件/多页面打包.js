const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// 多入口打包
module.exports = {
  mode: "development",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "/api": "" },
      },
    },
  },

  entry: {
    home: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "other.html",
      chunks: ["other"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, "./doc/index.txt"), to: "assets" },
      ],
    }),
  ],
};
