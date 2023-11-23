const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const marketingDomain = process.env.MARKETING_PRODUCTION_DOMAIN;
const authDomain = process.env.AUTH_PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // marketing: `marketing@${domain}/marketing/remoteEntry.js`
        marketing: `marketing@${marketingDomain}/remoteEntry.js`,
        auth: `auth@${authDomain}/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);
