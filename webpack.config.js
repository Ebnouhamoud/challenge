const path = require('path');
const  webpack  = require('webpack');

console.log('webpack mode:', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './public/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    publicPath: '/dist/',
    proxy: {
      '/': 'http://localhost:3000',
    },
    watchOptions: {
      poll: true,
      ignored: '/node_modules/',
    },
    hot: true,
  },
  
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
};