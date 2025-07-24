const path = require('path')
const webpack = require('webpack')
const FileManagerPlugin = require('filemanager-webpack-plugin')
module.exports = env => {

  const isProduction = !!env&&env.production
  const mode = isProduction?'production':'development'

  console.info(mode)

  return {
    mode
    ,entry: './src/index.js'
    ,output: {
      filename: 'index.js'
      ,path: path.resolve(__dirname, 'dist')
    }
    //,devtool: 'source-map'
    ,devtool: 'cheap-module-source-map' // or 'inline-source-map'
    ,module: {
      rules: [{
          test: /\.css$/
          ,use: [
              'style-loader'
              ,'css-loader'
          ]
      },{
        test: /\.js$/
        ,exclude: /node_modules/
        ,use: {
          loader: 'babel-loader'
          ,options: { babelrc: true }
        }
      }]
    }
    ,plugins: [
      new webpack.DefinePlugin({
        _VERSION: JSON.stringify(require('./package.json').version)
      })
      ,new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
              { source: './dist/index.js', destination: './docs/index.js' }
            ]
          }
        }
      })
    ]
  }
}
