const path = require("path");
const config = require("./config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html 模板插件
const VueLoaderPlugin = require("vue-loader/lib/plugin"); //vue解析loader
const DotenvFlow = require("dotenv-flow-webpack"); //配置env文件

module.exports = () => {
  console.log(process.env.NODE_ENV);
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
      rules: [
        {
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
          loader: "vue-loader"
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: "url-loader?limit=10000&name=images/[hash:8].[name].[ext]"
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: "url-loader?limit=10000&name=media/[hash:8].[name].[ext]"
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: "url-loader?limit=10000&name=font/[hash:8].[name].[ext]"
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
      new DotenvFlow(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new VueLoaderPlugin()
    ]
  };
};
