let webpack = require("webpack");
const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app/components"),
      path.resolve(__dirname, "app/api"),
      path.resolve(__dirname, "app/actions"),
      path.resolve(__dirname, "app/reducers"),
      path.resolve(__dirname, "app/store"),
      path.resolve(__dirname, "app/firebase")
    ],
    alias: {
      applicationStyles: __dirname + "/app/styles/app.scss"
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:
    process.env.NODE_ENV === "production"
      ? undefined
      : "cheap-module-eval-source-map"
};
