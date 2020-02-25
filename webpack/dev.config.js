const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader',
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true,
							// modules: true,
							// localIndexName: "[name]__[local]___[hash:base64:5]",
							// modifyVars: {}
						}
					}
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							esModule: false
						}
					}
				]
			},
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'public/index.html'
		})
	],
};
