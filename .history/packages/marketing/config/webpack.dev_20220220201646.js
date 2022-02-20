const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
	mode: "development",
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: "index.html",
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
