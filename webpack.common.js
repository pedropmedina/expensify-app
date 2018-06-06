const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
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
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
	plugins: [new webpack.HotModuleReplacementPlugin()],
	resolve: { extensions: ['*', '.js', '.jsx'] },
};
