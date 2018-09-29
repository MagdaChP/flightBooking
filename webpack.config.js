//Konfiguracja Webpack
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["./js/app.jsx", "./sass/main.scss"],
  output: { filename: "out.js", path: path.resolve(__dirname, "js"), publicPath: '/' },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  mode: "development",
  watch: true,
  module: {
    rules: [{
      test: /\.jsx$/, exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["es2015", ["env", {
            targets: {
              browsers: [
                '> 1%',
                'last 2 versions',
                'ie 6-8',
                'ie 10',
                'dead']
            }
          }], "stage-2", "react"]
        }
      }
    },
    {
      test: /\.css/,
      use: ['style-loader', 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              new require('autoprefixer')({
                browsers: [
                  'ie 11'
                ]
              })
            ]
          }
        },
        'sass-loader']
    }]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}