const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer:{
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    port: 3000
  },
 });