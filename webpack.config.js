const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const WebpackConfig = {
	devtool: !isProd ? 'eval-source-map' : false,
	mode: !isProd ? 'development' : 'production',
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
};

module.exports = WebpackConfig;
