const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      "/appmetrics-dash": "http://localhost:3100",
      "/health": "http://localhost:3100"

    }
  }
});