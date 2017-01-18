const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: '/dist',
        publicPath: 'https://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        progress: true,
        compress: true
    },
    plugins: [
    ]
});