/*
 * Webpack configuration object
 */

var bourbon = require('node-bourbon').includePaths;
var path = require("path");
var webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry : [
    'webpack/hot/dev-server',
    './app/js/components/App.js'
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
      {test: /\.es6\.js$/, 
        loader: 'es6-loader'},
      {test: /\.jsx$/, 
        loaders: ['react-hot', 'jsx-loader?harmony&insertPragma=React.DOM']},
      {test: /\.scss$/, 
        loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + 
            bourbon}
        /*
            (path.resolve(__dirname, './app/scss'))}
        */
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
