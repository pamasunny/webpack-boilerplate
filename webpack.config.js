
const path = require("path");


module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputpath: "images",
          },
        },
      },
    ],
  },
};
