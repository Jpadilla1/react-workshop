var path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?optional[]=runtime&stage=0'
        ]
      }
    ]
  }
};
