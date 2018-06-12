const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public', 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { sourceMap: true } },
				],
			},
			{
				test: /\.(jpg|gif|png|svg)$/,
				use: [
					{ loader: 'file-loader', options: { name: 'images/[name].[ext]' } },
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [{ loader: 'file-loader' }],
			},
			{
				test: /\.(csv|tsv)$/,
				use: [{ loader: 'csv-loader' }],
			},
			{
				test: /\.xml$/,
				use: [{ loader: 'xml-loader' }],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
			chunkFilename: '[id].css',
		}),
	],
	resolve: { extensions: ['*', '.js', '.jsx'] },
};
