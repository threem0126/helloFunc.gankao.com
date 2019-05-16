// jscs:disable
var webpack = require("webpack");
var json = require('./package.json') // 这个路径视当前的路径进行对于修改

const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    //console.info(Math.floor(percentage*100)/100.00 , message);
};

module.exports = {
    mode: 'production',
    entry:  {
        main: "./main.js"
    },
    target: 'node',
    output: {
        path: __dirname,
        //filename: "[name].[chunkhash:8].js",
        filename: "func.js",
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.ProgressPlugin(handler)
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};