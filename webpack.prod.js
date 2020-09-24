const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new ZipPlugin({
      path: "",
      filename: "web.zip",
      pathPrefix: `./sites/${path.basename(process.cwd())}/`,
      include: [/\.css/, /\.js(\.map)?/],
    }),
  ],
  output: {
    publicPath: `/sites/${path.basename(process.cwd())}/`,
  },
});
