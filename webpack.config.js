let webpack = require('webpack');
module.exports = {
  entry: {
    app: __dirname + "/src/index.tsx"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + '/public/dist'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
          loader: 'style-loader!css-loader'},
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },

    ]
  },

  devServer: {
    publicPath: "/public/dist",
    contentBase: "./public",
    hot: true
  }
};