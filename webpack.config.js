const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractCss = new ExtractTextPlugin({
  filename: 'index.css',
  disable: isDev,
});

module.exports = {
  entry: {
    bundle: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      svelte: path.resolve('node_modules', 'svelte'),
    },
    mainFields: ['svelte', 'browser', 'module', 'main'], //
  },
  plugins: [
    new HtmlWebpackPlugin(),
    extractCss,
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: extractCss.extract({
          use: [{ loader: 'css-loader' }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader',
          options: {},
        },

      },
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
      },
    ],
  },
};
