const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname,"dist")

	},
	optimization: {
		usedExports: true,
	},
	plugins: [
	new HtmlWebpackPlugin({
		template: "./src/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
				"style-loader",
				"css-loader",
				{
      			loader: 'postcss-sass-loader',
      			options: {
        			alias: {
           			 "@test": "/home/test"
        		}
				}},
				"sass-loader"
				]
			}
		]
	}
});