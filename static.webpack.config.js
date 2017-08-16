var path = require('path');
var webpack = require('webpack');
var findCacheDir = require('find-cache-dir');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-render-webpack-plugin');

if (typeof window === 'undefined') {
    global.window = {}
}
  
module.exports = {
  entry: './src/static/index.js',
  output: {
    path: path.resolve(__dirname, './build/static/'),
    filename: 'static.js',
    // required by StaticSiteGeneratorPlugin
    libraryTarget: 'umd'
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
          generate: "ssr",
          css: false
        }
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
            fallback: [{
                loader: 'style-loader',
            }],
            use: [{
                loader: 'css-loader',
                options: {
                    modules: false,
                },
            }],
        }),
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static.js', ['/']),
    new ExtractTextPlugin("main.css", {
      allChunks : true,
      module: false,
      fallback: ["style-loader"],
      use: ["css-loader"]}),
  ],
  devtool: 'source-map-inline',
  devServer: {
    inline: true
  },
};


