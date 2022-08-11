/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    return {
      ...config,
      plugins: [...config.plugins, new NodePolyfillPlugin({})],
    };
  },
};

module.exports = nextConfig;
