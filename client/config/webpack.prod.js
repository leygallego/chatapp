const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: "production",
    // devtool: "sourse-map",
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                test: /.(css)$/
            },
        ]
    }
}

module.exports  = merge(common, prodConfig);