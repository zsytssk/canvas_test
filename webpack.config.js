'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let common_config = {
    entry: {
        bundle: ['./src/main.ts', './test/test.ts'],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        modules: [path.resolve('node_modules'), path.resolve('assets')],
        alias: {
            lightCanvas: path.resolve(__dirname, './lightCanvas'),
        },
        extensions: ['.ts', '.js', '.cjs', '.json'],
    },

    module: {
        rules: [
            {
                test: /(\.ts|\.js|\.cjs)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
};

const dev_config = {
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
        allowedHosts: 'all',
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, 'bin'),
        },
        port: 8080,
        https: false,
        open: 'http://localhost:8080',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'LightCanvas',
            template: 'public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/public',
                    to: __dirname + '/dist',
                    globOptions: {
                        ignore: ['**/index.html'],
                    },
                },
            ],
        }),
    ],
};

const prod_config = {
    entry: ['./src/main.ts'],
};
const prod_ts_compile_option = {
    target: 'es5',
    sourceMap: false,
    lib: ['dom', 'es5', 'es2015.promise'],
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return Object.assign(common_config, dev_config);
    } else {
        common_config.module.rules[0].options.compilerOptions =
            prod_ts_compile_option;
        return Object.assign(common_config, prod_config);
    }
};
