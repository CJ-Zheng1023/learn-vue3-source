const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const resolve = function (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    })
  ],
  devServer: {
    host: 'localhost',
    port: '9999'
  }
}
