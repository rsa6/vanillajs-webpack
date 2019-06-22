### Vanilla js, Typescript with Webpack
- typescript compile -> webpack -> webpack or devserver -> click static folder

# webpack (old version)
```
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
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
```