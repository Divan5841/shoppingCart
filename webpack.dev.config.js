const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].js',
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    https: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
})
