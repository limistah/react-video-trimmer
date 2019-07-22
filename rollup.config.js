import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import scss from "rollup-plugin-scss";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

const umdGlobals = {
  react: "React",
  "prop-types": "PropTypes"
};

export default {
  input: "./src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "reactVideoTrimmer",
    globals: umdGlobals,
    sourcemap: "inline",
    exports: "named"
  },
  external: Object.keys(umdGlobals),
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve({ preferBuiltins: true }),
    globals(),
    builtins(),
    commonjs(),
    scss({
      output: "./dist/style.css",
      failOnError: true
    }),
    uglify()
  ]
};
