/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-05-10 14:30:12
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-05-10 15:28:40
 */
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const production = process.env.NODE_ENV === 'production'
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack 设置,可覆盖默认配置
  chainWebpack: config => {
    config.external = {
      vue: 'Vue'
    }
    config.resolve.alias.set('@', resolve('src') + '/')
  },
  configureWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js']
    if (production) {
      // 为生产环境修改配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true // 生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      )
    }
    // // 优化项配置
    // config.optimization = {
    //   runtimeChunk: 'single',
    //   splitChunks: { // 分割代码块
    //     cacheGroups: {
    //       vendor: { // 第三方库抽离
    //         chunks: 'all',
    //         test: /node_modules/,
    //         name: 'vendor',
    //         minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数
    //         maxInitialRequests: 5,
    //         minSize: 0, // 大于0个字节
    //         priority: 100// 权重
    //       },
    //       common: { // 公用模块抽离
    //         chunks: 'all',
    //         test: /[\\/]src[\\/]js[\\/]/,
    //         name: 'common',
    //         minChunks: 2, // 在分割之前，这个代码块最小应该被引用的次数
    //         maxInitialRequests: 5,
    //         minSize: 0, // 大于0个字节
    //         priority: 60
    //       },
    //       styles: { // 样式抽离
    //         name: 'styles',
    //         test: /\.(sa|sc|c)ss$/,
    //         chunks: 'all',
    //         enforce: true
    //       },
    //       runtimeChunk: {
    //         name: 'manifest'
    //       }
    //     }
    //   }
    // }
  },
  runtimeCompiler: true,
  productionSourceMap: false, // 是否生成map文件
  transpileDependencies: ['vue-grid-layout'] // 是否引用第三方 es6+ 的插件进行ie兼容
}
