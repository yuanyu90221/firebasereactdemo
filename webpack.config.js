// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: 'index.html',
  inject: 'body',
});
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var uglifyJsPluginOpt = new webpackUglifyJsPlugin({
  cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
  debug: true,
  minimize: true,
  sourceMap: false,
  output: {
    comments: false
  },
  compressor: {
    warnings: false
  }
})
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
  entry: [
    './src/app.js',
  ],
  // output 是放入產生出來的結果的相關參數
  output: {
    path: `${__dirname}/build/`,
    filename: '[name].js',
    
  },
  module: {
    // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
  },
  // devServer 則是 webpack-dev-server 設定
  devServer: {
    inline: true,
    port: 8008,
  },
  // plugins 放置所使用的外掛
  plugins: [HTMLWebpackPluginConfig,
    uglifyJsPluginOpt
  ],
};
