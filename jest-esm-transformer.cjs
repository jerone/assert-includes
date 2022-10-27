const babel = require("@babel/core");

module.exports = {
  process(sourceText, sourcePath, options) {
    const babelOptions = {
      babelrc: false,
      compact: false,
      plugins: [
        "@upleveled/remove-node-prefix",
        "@babel/plugin-transform-modules-commonjs",
      ],
    };
    return {
      code: babel.transform(sourceText, babelOptions).code,
    };
  },
};
