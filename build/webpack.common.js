const path = require("path");
const config = require("./config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html 模板插件
const VueLoaderPlugin = require("vue-loader/lib/plugin"); //vue解析loader

module.exports = (env, argv) => {
  const NODE_ENV = env.NODE_ENV;
  return {
    entry: {
      main: path.join(__dirname, "../src/main.js")
    },
    output: {
      filename: "app.js", // 打包后文件名为app.js
      chunkFilename: "[name].[contenthash:6].js", // 按需加载文件名称
      path: path.resolve(__dirname, "../dist"), //打包后的文件资源在dist文件下
      publicPath: "/"
    },
    module: {
      rules: [{
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          enforce: "pre",
          include: config.srcPath,
          exclude: /node_modules/,
          //eslint检查报告的格式规范
          options: {
            formatter: require("eslint-friendly-formatter")
          }
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          include: config.srcPath,
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          include: config.srcPath,
          loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
          exclude: /node_modules/
        },
        {
          test: /\.(ttf|eot|mp4|ogg|svg)$/,
          include: config.srcPath,
          loader: "file-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        // 引入模块别名
        "@": `${config.srcPath}`,
        routers: `${config.srcPath}/routers`,
        stores: `${config.srcPath}/stores`,
        pages: `${config.srcPath}/pages/`,
        util: `${config.srcPath}/util/`,
        styles: `${config.srcPath}/styles/`
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "../index.html"), //样板
        inject: "body", //注入到哪里
        chunksSortMode: "none",
        hash: true
      }),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify("development") // 定义环境变量
      }),
      new VueLoaderPlugin()
    ]
  };
};