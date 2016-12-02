var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

var entryPath = path.resolve(__dirname, './index');
var distUrl = '/static/';
var distPath = path.resolve(__dirname, distUrl);

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        children: true,
        minChunks: 2,
    }),
    new CleanPlugin(distPath),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    entryPath
  ],
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: distUrl
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss/,
        loader: "style-loader!css-loader!sass-loader?outputStyle=expanded"
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loaders: ['url-loader?limit=3000', 'image-webpack'],
      },
    ]
  }
}
