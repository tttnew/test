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
    rules: [
      /*
    your other rules for JavaScript transpiling go in here
    */
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader"
      },
      {
        // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: "css-loader?importLoaders=1"
        })
      },
      {
        // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
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
