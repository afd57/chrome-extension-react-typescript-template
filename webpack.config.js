const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    popup: "./src/popup.tsx",
    "content-script": "./src/content-script.ts",
    buttonn: "./src/buttonn.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node+modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/popup.html",
      filename: "popup.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  }
};

