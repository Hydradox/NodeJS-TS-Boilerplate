const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  watch: NODE_ENV === 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      }
    ],
  },

  externals: [nodeExternals()],
}
