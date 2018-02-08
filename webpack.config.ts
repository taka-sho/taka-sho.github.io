const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js'
    }
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
