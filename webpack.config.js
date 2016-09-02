module.exports = {
  // ===== This is for a single entry point =====
  // entry: './src/scripts/main.js',
  // ===== This is for multiple single entry point =====
  entry: {
    main: './src/scripts/main.js',
    main2: './src/scripts/main2.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    // ===== This is for a single entry point =====
    filename: 'bundle.js'
    // ===== This is for multiple single entry point =====
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