const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(le|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 先执行 postcss-loader 之后再执行 css-loader
          }
        },
        {
          loader: 'postcss-loader'
        },
        "less-loader"
      ]
    }]
  },
  optimization: {
    // mode 必须设置为 productiion
    // 压缩css
    minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin([
      { from: './assets/resume.pdf', to: './resume.pdf' },
    ]),
  ],
  devServer: {
    hot: true,
    open: true,
    port: 8000,
  }
};