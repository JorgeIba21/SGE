const webpack = require('webpack');
const path = require('path');
const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(_dirname, '../force-app/main/default/staticresources/reactApp'),
        filename: 'bundle.js'
    }
    module: {
        rules: [{

        
        test: ,
        exclude: /node_modules/ ,
loader: 'babel-loader',
query: {
presets: ['es2015', 'react']
module.exports = config;
