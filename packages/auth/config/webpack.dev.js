const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const pkgJson = require("../package.json");

const devConfig = {
	mode: "development",

	devServer: {
		port: 8082,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "auth",
			filename: "remoteEntry.js",
			exposes: {
				"./Auth": "./src/bootstrap",
			},
			// shared: pkgJson.dependencies,
		}),
		new HTMLWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
