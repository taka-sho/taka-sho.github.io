const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/index.ts')
  },
  output: {
    path: __dirname,
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        }
      },
      {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new StyleLintPlugin({
        files: ['src/components/**/*.vue'] 
    })
  ]
}
