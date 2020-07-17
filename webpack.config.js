const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
         },
       },
  devServer: {
    port: 3000,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'uikit.html',
      template: './uikit.pug'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        }
      },
      {
        test: /\.(css)|(scss)$/i,
        use: [
          'style-loader',
          {
          loader: MiniCssExtractPlugin.loader,
          options: {
            name: '[name].css',
          }
        }, 'css-loader', 'sass-loader'
      ],
      },
      {
        test: /\.(svg|ttf|woff)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      }
    ]
  }
};

module.exports = (env, argv) => {
if (argv.mode === 'development') {}
 if (argv.mode === 'production') {}
return config;
}