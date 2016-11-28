/* eslint-env node */

const path = require('path')
const DotenvPlugin = require('webpack-dotenv-plugin')
const nodeDir = __dirname + '/node_modules'
const VersionFile = require('webpack-version-file-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const webpack = require('webpack')

const config = {
  historyApiFallback: true,
  devTool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  entry: {
    app: ['./src/index']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style?sourceMap', 'css?sourceMap'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.scss?$/,
        loaders: [ 'style', 'css', 'sass?sourceMap'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new DotenvPlugin({
      path: '.env',
      sample: '.env.example'
    })
  ]
}

module.exports = config
