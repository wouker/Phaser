const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

    output: {
        filename: "[name].[chunkhash].js",
        path: "dist" //obsolete for dev when we'll use server
    },
    plugins: [        
        new CleanWebPackPlugin(['dist'], {
            root: process.cwd(),
            verbose: true,
            //dry: false, //true: emulates delete, no physical delete - false default
        })
    ]
});