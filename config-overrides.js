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
        "plugins": ["line-highlight"],
        "theme": 'okaidia',
        "css": true
    }]
  ),
  removeModuleScopePlugin(),
);