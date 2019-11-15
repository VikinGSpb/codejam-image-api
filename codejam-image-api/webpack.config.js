const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },

            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },

            {
                test: /\.css$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader' ]
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: 
                    {
                        name: '[name].[ext]',
                        outputPath: 'assets/img'
                    }
                  }]
            },

            {
                test: /\.(eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: 
                    {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                  }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000
    }
}