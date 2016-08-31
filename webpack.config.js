module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style', 
          'css'
        ]
      }
    ]
  }
}