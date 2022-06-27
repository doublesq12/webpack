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
      },
      {
        test: /\.less$/, // 匹配执行类型的文件
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        // 执行的顺序 less-loader css-loader style-loader
        // less-loader 先把less代码转换成css
        // css-loader 再把css代码转换成webpack 可以识别的js代码
        // style-loader 在把css代码插入到 dom中
          use: [ "style-loader", "css-loader", 'less-loader']
      },
      { // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(png|jpg|gif|jpeg)$/i,
        // type: 'asset', // 在导出一个 data URI 和发送一个单独的文件之间自动选择
        // 如果你设置的是asset模式
        // 以8KB大小区分图片文件
        // 小于8KB的, 把图片文件转base64, 打包进js中
        // 大于8KB的, 直接把图片文件输出到dist下
          
        // type: 'asset/resource' // 发送一个单独的文件并导出 URL
        // type: 'asset/inline' // 导出一个资源的 data URI
        type: 'asset',
        parser: { // 解析器 规则
          dataUrlCondition: { // dataUrl的情况
            maxSize: 8 * 1024,
            // maxSize 限制最大值
          },
        },
        generator: {
          filename:'[hash:6][ext]'
        }
      },
    ]
}
}