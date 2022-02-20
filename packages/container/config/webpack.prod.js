const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const pkgJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN || "http://localhost";

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				marketing: `marketing@${domain}/marketing/remoteEntry.js`,
			},
			shared: pkgJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);