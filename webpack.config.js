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
  },
  module: { // loader 加载器 配置在这儿
    rules: [ // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: [ "style-loader", "css-loader"]
      }
    ]
}
}