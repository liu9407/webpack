
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/build",// 修改了此处的目录，打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        port: '3000'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/tmpl/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })      
    ]
}