'use strict';

var webpack = require('webpack');
var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: __DEV__ ? false : false,
  entry: {
	main: __dirname + '/src/main.js',
	panel: __dirname + '/src/panel.js'
  },
  output: {
	path: __dirname + '/build',
	filename: '[name].js',
  },
  plugins: __DEV__ ? [] : [
	// Ensure we get production React
	new webpack.DefinePlugin({
	  'process.env.NODE_ENV': '"production"',
	}),
	// Remove dead code but keep it readable:
	new webpack.optimize.UglifyJsPlugin({
	  mangle: false,
	  beautify: true,
	}),
  ],
  module: {
	loaders: [{
	  test: /\.js$/,
	  loader:  'babel-loader',
	  exclude: /node_modules/
  },
	  {
	    test: /\.jsx$/,
	    loader:  'babel-loader',
	    exclude: /node_modules/
	  }],
	}
  };