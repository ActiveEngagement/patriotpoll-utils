const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    configureWebpack: {
        externals: ['axios'],
        optimization: {
            sideEffects: false
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/),
            new BundleAnalyzerPlugin()
        ]
    },
    css: {
        sourceMap: process.env.NODE_ENV === 'production'
    }
};
