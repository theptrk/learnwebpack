module.exports = {
  entry: {
    main: './src/scripts/main.js',
    main2: './src/scripts/main2.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name]/bundle.js'
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