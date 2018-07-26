const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    // compiled code to go
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    // Specifying our loader
    // We look for anything that is .js or .jsx
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}