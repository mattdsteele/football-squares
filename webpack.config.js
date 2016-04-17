var webpack = require('webpack');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    'bundle.js': ['./index'],
  },
  devtool: 'source-map',
  output: {
    publicPath: '/',
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  resolve: {
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({})
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' }
    ]
  }
};
