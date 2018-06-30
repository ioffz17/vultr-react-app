module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: '/app'
  },
  //mode: 'development',
  watch: true,
  mode: 'production',
  // optimization: {
  //   minimize: true
  // },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx|\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [require.resolve('babel-preset-env'), { modules: false }],
                require.resolve('babel-preset-react')
              ],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:8]',
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: './images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff2|\.woff$|\.ttf$|\.eot$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: './fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
