const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')
const fs = require('fs')

const genPugPages = dir => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, dir))
  return templateFiles.map(item => {
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${dir}/${name}.${extension}`),
      chunks: ['uikit', 'styles']
    })
  })
}

const pugPages = genPugPages('./src/uikit')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
    sign: './js/sign.js',
    uikit: './js/uikit.js',
    styles: './js/styles.js',
    details: './js/details.js',
    search: './js/search.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "scripts/[name].js",
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
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
  }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.pug',
      chunks: ['index', 'styles']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './login.pug',
      chunks: ['sign', 'styles']
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './registration.pug',
      chunks: ['sign', 'styles']
    }),
    new HtmlWebpackPlugin({
      filename: 'details.html',
      template: './details.pug',
      chunks: ['styles', 'details']
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: './search.pug',
      chunks: ['styles', 'search']
    }),
    new CopyPlugin({
      patterns: [
        { from: './copy'},
      ],
    }),
    new CleanWebpackPlugin()
  ].concat(pugPages),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          useRelativePath: true,
          esModule: false
        }
      },
      {
        test: /\.(css)|(scss)$/i,
        use: [
          'style-loader', {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
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