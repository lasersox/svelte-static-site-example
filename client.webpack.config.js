var path = require('path');
var webpack = require('webpack');
var findCacheDir = require('find-cache-dir');

if (typeof window === 'undefined') {
    global.window = {}
}
  
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build/static/'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: findCacheDir({ name: 'cached-scripts' }),
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'svelte-loader',
        options: {
          generate: "dom",
          hydratable: true,
          css: false,
        }
      },
    ]
  },
  plugins: [
  ],
  devtool: 'source-map-inline',
  devServer: {
    inline: true
  },
};


