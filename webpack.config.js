const path = require("path");

module.exports = {
	entry: {
		index: ["babel-polyfill", "./src/index.js"],
		about: ["babel-polyfill", "./src/about.js"],
		article: ["babel-polyfill", "./src/article.js"],
	},
	output: {
		path: path.resolve(__dirname, "public/scripts"),
		filename: "[name]-bundle.js",
	},
	devServer: {
		contentBase: path.resolve(__dirname, "public"),
		publicPath: "/scripts/",
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
