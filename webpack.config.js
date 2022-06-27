const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/main.js", // 入口
  output: { 
      path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
      filename: "bundle.js" // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    })
]
}