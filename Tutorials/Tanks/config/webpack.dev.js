const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {

    output: {
        filename: "[name].js",
        path: "dist" //obsolete for dev when we'll use server
    }

    //todo: run webserver in package.json + set path here (localhost:8080)
});