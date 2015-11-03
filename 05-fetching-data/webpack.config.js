var path = require('path');

module.exports = {
  entry: {
    app: ['./app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional[]=runtime&stage=0',
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
