/*
 * Webpack configuration object
 */

var webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry : [
    'webpack/hot/dev-server',
    './app/js/components/App.react.js'
  ],
  output : {
    path: __dirname,
    filename: './app/js/bundle.min.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader?harmony&insertPragma=React.DOM']},
      {test: /\.es6\.js$/, loader: 'es6-loader'},
    ]
  },
  resolve : {
    extensions: ['', '.js', '.jsx'],
    alias : {
      actions : __dirname + '/app/js/actions',
      constants : __dirname + '/app/js/constants',
      dispatcher: __dirname + '/app/js/dispatcher',
      stores : __dirname + '/app/js/stores'
    }
  }
};
