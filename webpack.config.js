let path = require('path');
let webpack = require('webpack');
let fs = require('fs')


const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [];
plugins.push(new VueLoaderPlugin)
plugins.push(new CleanWebpackPlugin({
    cleanStaleWebpackAssets: true
}))
plugins.push(new HtmlWebpackPlugin({
    template: 'src/base.html'
  }))

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/',
        filename: '[name].[hash].bundle.js'
    },
    module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.(scss|css)$/,
            use: [{
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }]
        },
    ]
    },
    devServer: {
        proxy: {
          '/**': {  //catch all requests
            target: 'public/index.html',  //default target
          }
        }
    },
    plugins: plugins
}
