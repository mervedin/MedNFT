const webpack = require('webpack');

module.exports = {
  webpack: function (config, env) {
    // Add fallbacks for Node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "vm": require.resolve("vm-browserify"),
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "zlib": require.resolve("browserify-zlib"),
    };

    // Provide necessary polyfills
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'], // Provide global Buffer polyfill
        process: 'process/browser.js', // Use process polyfill with .js extension
      })
    );

    return config;
  },
};