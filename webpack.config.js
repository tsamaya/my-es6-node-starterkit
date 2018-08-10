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
    libraryTarget: 'umd',
    filename: './es6-starterkit.js',
  },
};

module.exports = [nodeConfig, browserConfig];
