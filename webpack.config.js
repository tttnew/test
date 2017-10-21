var webpack = require("webpack");
var path = require("path");
var BUILD_DIR = path.resolve(__dirname, "server/public/");
var APP_DIR = path.resolve(__dirname, "src/");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [APP_DIR + "/index.js", APP_DIR + "/scss/main.scss"],
  output: {
    path: BUILD_DIR,
    filename: "main.js"
  },
  module: {
    rules:[
      {
          test: /.\js$/,
          use: ['babel-loader'],
          exclude:[/node_modules/],
      },{
          test: /\.scss$/,
          use:ExtractTextPlugin.extract({
            use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
          })
      },{
          test: /.\css$/,
          use:ExtractTextPlugin.extract({
              fallback:'style-loader',
              use: 'css-loader'
          }),
      }
  ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ]
};
