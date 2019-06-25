const { 
  override,
  addBabelPlugins,
  removeModuleScopePlugin,
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    "babel-plugin-styled-components",
    ["prismjs", {
        "languages": ["javascript", "jsx"],
        "plugins": ["line-highlight", "copy-to-clipboard"],
        "theme": 'okaidia',
        "css": true
    }]
  ),
  removeModuleScopePlugin(),
);