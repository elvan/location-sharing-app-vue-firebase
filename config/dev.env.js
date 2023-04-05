'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const { MAPS_KEY } = require('./maps');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MAPS_KEY: MAPS_KEY
});
