const path = require('path');

module.exports = function override(config, env) {
  // Add raw-loader for .md files
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader'
  });

  return config;
};