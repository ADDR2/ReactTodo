let webpack = require("webpack");
const path = require("path");
const envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || "development";

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (error) {

}

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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
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
      path.resolve(__dirname, "app/firebase"),
      path.resolve(__dirname, "app/router")
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
