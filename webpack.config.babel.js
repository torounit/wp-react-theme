import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {resolve, dirname, join,basename} from 'path';
import webpack from 'webpack';
console.log(__dirname + '/resources/');
console.log('/wp-content/themes/' + basename(__dirname) + '/resources/')
const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + 4567,
    'webpack/hot/only-dev-server',
    './resources/app/index.js',
    './resources/app/index.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/wp-content/themes/' + basename(__dirname) + '/resources',
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
    //contentBase: __dirname,
    //publicPath: '/hoge',
    publicPath: '/wp-content/themes/' + basename(__dirname) + '/resources',
    port: 4567,
    hot: true,
    quiet: false,
    stats: { colors: true },
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
