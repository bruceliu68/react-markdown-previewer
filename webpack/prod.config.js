const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'production',
	entry: './src/components/MarkdownPreviewer/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
		libraryTarget: 'commonjs2'
	},
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
						loader: "url-loader",
						options: {
							esModule: false
						}
					}
				]
			},
		]
	},
	externals: [nodeExternals()]
};
