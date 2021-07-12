const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const path = require('path');
module.exports = {
  mode: 'development',
  entry: './scripts/src/index.ts',
  watch: true,
  output: {
    path: path.join(__dirname, './scripts/build'),
    publicPath: './scripts/build/',
    filename: "bundle.js",
    //chunkFilename: '[name].js'
  },
  module: {
    rules: [
      // {
      //   test: /.jsx?$/,
      //   include: [
      //     path.resolve(__dirname, 'app')
      //   ],
      //   exclude: [
      //     path.resolve(__dirname, 'node_modules')
      //   ],
      //   loader: 'babel-loader',
      //   query: {
      //     presets: [
      //       ["@babel/env", {
      //         "targets": {
      //           "browsers": "last 2 chrome versions"
      //         }
      //       }]
      //     ]
      //   }
      // }
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map',



  // -----------------------
  // TODO
  // -----------------------
  // devServer: {
  //   contentBase: path.join(__dirname, ''),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
};