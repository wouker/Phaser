const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

//todo: move dist-stuff to prod, use quick-webserver in dev

    output: {
        //todo: with use chunkhash, we need to kill dist before wepackbuild
        filename: "[name].[hash].js",
        path: "dist" //obsolete for dev when we'll use server
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app','vendor'],
            minChuncks: Infinity
            //todo: npm i chunk-manifest-webpack-plugin
        }),
        new CleanWebPackPlugin(['dist'], {
            root: process.cwd(),
            verbose: true,
            //dry: false, //true: emulates delete, no physical delete - false default
        })
    ]

    //todo: run webserver in package.json + set path here (localhost:8080)
});