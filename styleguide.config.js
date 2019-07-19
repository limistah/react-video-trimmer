const path = require("path");
const {
  createConfig,
  babel,
  match,
  postcss,
  sass,
  css
} = require("webpack-blocks");

module.exports = {
  title: "react-video-trimmer",
  styleguideDir: path.join(__dirname, "styleguide"),
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
  require: [path.join(__dirname, "examples/theme.css")],
  sections: [
    {
      name: "",
      content: "README.MD"
    }
  ]
};
