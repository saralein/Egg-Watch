const webpack = require('webpack');
const path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

const config = {
  entry: './app/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
    alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2,
    },
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loaders: [
            { test: /pixi.js/, loader: "script" }, 'babel-loader'
        ],
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    }]
  }
};

module.exports = config;
