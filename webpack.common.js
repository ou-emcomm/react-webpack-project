const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      //images and ical files
      {
        test: /\.(png|jpg|gif|ics)$/,
        loader: "file-loader",
        options: {
          limit: 8192,
          outputPath: "static",
          esModule: false,
        },
        exclude: /node_modules/,
      },
      //svg files
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          outputPath: "static",
          esModule: false,
        },
        exclude: /node_modules/,
      },
      //fonts
      {
        test: /\/webfonts\/.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts",
        },
        exclude: /node_modules/,
      },
      //scripts
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      //styles
      {
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      // cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: "OU Counselor Conference",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
