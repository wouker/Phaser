const HtmlWebpackPlugin = require('html-webpack-plugin');

//todo linter stuff

module.exports = {
    entry: {
        app: './src/app/main.ts',
        vendor: './src/assets/vendor.js' //todo:does not compute //todo chunks-stuff
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js'],
        // alias: {
            //obsolete with vendor.js?
        //     'phaser': phaser
        // }
    },
    module: {
        //todo: add loader (?) for phaser-files
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' },
            { test: /\.html$/, loader: 'html' }],
        preLoaders: [{ test: /\.js$/, loader: 'source-map-loader' }]
    },
    plugins: [
        //todo: uglify-stuff
        new HtmlWebpackPlugin({ template: './src/app/index.html' })
    ]
}