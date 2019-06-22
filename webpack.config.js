const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './dist/app.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'dist'), // complie folder
                exclude: /(node_modules)|(dist)/, // except folder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["env", {
                                "targets": {
                                    "browsers": ["last 2 versions", "safari >= 7"]
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    }
}