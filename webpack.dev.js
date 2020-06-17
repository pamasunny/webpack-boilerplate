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
				{
					loader : 'style-loader',
				},
				{
					loader: 'css-loader',
					options: {
						importLoaders : 1,
					}
				},
				{
					loader: 'postcss-loader',
				},
				{
					loader : 'sass-loader'
				}
				]
			}
		]
	}
});