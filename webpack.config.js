var webpack = require('webpack');

module.exports = {
  context: `${__dirname}/js`,
  entry: './index',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`
  },
  resolve: {
    alias: {
      jQuery: 'jquery'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    //new webpack.optimize.UglifyJsPlugin({})
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' }
    ]
  }
};
