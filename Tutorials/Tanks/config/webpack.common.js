const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//todo linter stuff

module.exports = {
    entry: {
        app: './src/app/main.ts',
        vendor: './src/assets/vendor.ts'
    },
    devtool: 'source-map',
    resolve: {
        modulesDirectories: ['node_modules'], //todo: not sure what this does extra
        extensions: ['', '.ts', '.js']
    },
    module: {
        //todo: add loader (?) for phaser-files
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' },
            { test: /\.html$/, loader: 'html' }],
        preLoaders: [{ test: /\.js$/, loader: 'source-map-loader' }]
    },
    plugins: [
        //todo: uglify-stuff? (or only in prod?)
        new HtmlWebpackPlugin({ template: './src/app/index.html' }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor'],
            minChuncks: Infinity
        })
    ]
}