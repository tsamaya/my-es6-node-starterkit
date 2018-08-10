const nodeConfig = {
  entry: './src/index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: './es6-node-starterkit.js',
  },
};

const browserConfig = {
  entry: './src/index.js',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    library: 'es6starterkit',
    libraryTarget: 'umd',
    filename: './es6-starterkit.js',
  },
};

module.exports = [nodeConfig, browserConfig];
