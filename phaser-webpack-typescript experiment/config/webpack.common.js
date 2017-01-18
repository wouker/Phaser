const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

//todo linter stuff
const phaserModulePath = path.join(__dirname, '../node_modules/phaser/');
const phaserPath = path.join(phaserModulePath, 'build/custom/phaser-split.js');
const pixiPath = path.join(phaserModulePath, 'build/custom/pixi.js');
const p2Path = path.join(__dirname, '../node_modules/p2/src/p2.js');

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
        loaders: [
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: '/node_modules/' },
            { test: /\.html$/, loader: 'html' }
        ],
        preLoaders: [{ test: /\.js$/, loader: 'source-map-loader' }]
    },
    plugins: [
        //todo: uglify-stuff? (or only in prod?)
        new HtmlWebpackPlugin({ template: './src/app/index.html' }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor'],
            minChuncks: Infinity
        })
    ],
    resolve: {
        alias: {
            'phaser': phaserPath,
            'pixi': pixiPath,
            'p2': p2Path,
        }
    }
}