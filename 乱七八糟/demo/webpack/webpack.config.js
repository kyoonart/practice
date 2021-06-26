const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css
const { loader } = require("mini-css-extract-plugin");
module.exports = {
  devServer: {
    //开发服务器配置
    port: 3000,
    progress: true, //进度条
    contentBase: "./dist", //以build文件夹座位静态服务的文件夹
  },
  mode: "development", //模式  默认两种   production development    开发模式下的代码更容易辨识(压缩程度低)
  entry: "./src/index.js", //入口文件
  output: {
    filename: "bundle.[hash:8].js", //打包后的文件名 只显示8位 防止缓存
    path: path.resolve(__dirname, "dist"), //打包后放置文件的目录（路径必须是一个绝对路径）
  },
  // 配置loader loader的特点是 单一 每个loader 功能不同
  // loader 执行顺序 从右到左
  module: {
    // style-loader 是把解析好的css插入到head标签中
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?url=false"],
      },
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
  plugins: [
    //数组  放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: "./src/index.html", //plugin插件的模板
      filename: "index.html", //plugin插件打包后的文件名
      minify: {
        removeAttributeQuotes: true, //删除属性的双引号
        collapseWhitespace: true, //折叠空行
      },
      hash: true, //给生成的js文件增加hash戳，防止缓存
    }),
    new CleanWebpackPlugin(), // 删除之前的文件
    new MiniCssExtractPlugin({ filename: "main.css" }),
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
};
