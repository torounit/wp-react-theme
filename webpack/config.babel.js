import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {resolve, dirname, join} from 'path';
import webpack from 'webpack';
import env from '../.env.json';
const baseDir = dirname(__dirname)
const devServerPort = 4567;
const themeDirURL = join('/wordpress/wp-content/themes/', env.wp.theme) + '/'
const themeDirPath = join(baseDir, '/server/', themeDirURL)

const config = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:' + devServerPort,
		'webpack/hot/only-dev-server',
		'./assets/scripts/index.js',
		'./assets/styles/style.css'
	],
	output: {
		path: themeDirPath,
		publicPath: themeDirURL,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: themeDirPath,
		publicPath: themeDirURL,
		port: devServerPort,
		hot: true,
		proxy: {
			'**': {
				target: {
					protocol: 'http:',
					host: env.server.host,
					port: env.server.port
				},
			},
		}
	}
}
export default config
