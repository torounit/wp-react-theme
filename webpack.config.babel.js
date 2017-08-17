import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {resolve, dirname, join,basename} from 'path';
import webpack from 'webpack';
const baseDir = dirname(__dirname);
const devServerPort = 4567;

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + devServerPort,
    'webpack/hot/only-dev-server',
    './resources/app/index.js',
    './resources/app/index.css'
  ],
  output: {
    path: __dirname + '/resources/',
    publicPath: '/wp-content/themes/' + basename(__dirname) + '/resources/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './',
    publicPath: '/wp-content/themes/' + basename(__dirname),
    port: devServerPort,
    hot: true,
    proxy: {
      '**': {
        target: {
          protocol: 'http:',
          host: '0.0.0.0',
          port: 8080
        },
      },
    }
  }
}
export default config
