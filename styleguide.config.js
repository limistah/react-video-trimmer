const path = require("path");
const { createConfig, babel, match, sass, css } = require("webpack-blocks");

module.exports = {
  title: "react-video-trimmer",
  styleguideDir: path.join(__dirname, "docs"),
  webpackConfig: createConfig([
    babel(),
    match(["*.scss", "*.css", "!*node_modules*"], [css(), sass()])
  ]),
  exampleMode: "expand",
  usageMode: "expand",
  showSidebar: false,
  serverPort: 8080,
  moduleAliases: {
    "react-video-trimmer": path.resolve(__dirname, "./src")
  },
  require: [
    path.resolve(__dirname, "styleguide/setup.js"),
    path.join(__dirname, "examples/theme.css")
  ],
  sections: [
    {
      name: "",
      content: path.resolve(__dirname, "examples/BASE.MD")
    }
  ]
};
