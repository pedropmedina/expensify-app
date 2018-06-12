const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
	require('dotenv').config({ path: '.env.test' });
} else if (env === 'development') {
	require('dotenv').config({ path: '.env.development' });
}

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
		new webpack.DefinePlugin({
			'process.env.FIREBASE_API_KEY': JSON.stringify(
				process.env.FIREBASE_API_KEY,
			),
			'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
				process.env.FIREBASE_AUTH_DOMAIN,
			),
			'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
				process.env.FIREBASE_DATABASE_URL,
			),
			'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
				process.env.FIREBASE_PROJECT_ID,
			),
			'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
				process.env.FIREBASE_STORAGE_BUCKET,
			),
			'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
				process.env.FIREBASE_MESSAGING_SENDER_ID,
			),
		}),
	],
	resolve: { extensions: ['*', '.js', '.jsx'] },
};
