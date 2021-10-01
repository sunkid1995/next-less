// the following 2 lines are specific to this repo. in your project use next-with-less directly
const withLess = require("./withLess");
const path = require("path");

withLess.patchNext(require("next/dist/build/webpack/config/blocks/css"));

const pathToLessFileWithVariables = path.resolve("./assets/antd.less");
module.exports = withLess({
  lessLoaderOptions: {
    // it's possible to use additionalData or modifyVars for antd theming
    // read more @ https://ant.design/docs/react/customize-theme
    // additionalData: (content) => `${content}\n@border-radius-base: 10px;`,
    additionalData: (content) =>
      `${content}\n\n@import '${pathToLessFileWithVariables}';`,

    lessOptions: {
      modifyVars: {
        "primary-color": "#1242ca",
        "@success-color": "#52c41a",
        "@link-color": "#1242ca",
      },
    },
  },
});