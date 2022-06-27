const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: "./src/main.js", // 入口
  output: { 
      path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
      filename: "bundle.js" // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    //port: 3000, // 指定端口/
    open: true//自动打开页面
}
}