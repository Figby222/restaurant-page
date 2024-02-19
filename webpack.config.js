const path = require("path");

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};