const webpack = require("webpack");
const path = require("path");
 
const SRC = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "output");
 
const config = {
  entry: SRC + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "main.js"
  },
  module: {
    loaders: [{
        include: SRC,
        loader: "babel-loader",
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
 
module.exports = config;