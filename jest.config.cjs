/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
/** @type {import('jest').Config} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["index.{js,cjs}"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "text-summary", "lcov", "cobertura"],
  testEnvironment: "node",
  reporters: [
    "default",
    [
      // Needed for CI workflow Github Action Job Summary.
      // See https://github.com/dorny/test-reporter#supported-formats
      "jest-junit",
      {
        outputDirectory: "coverage",
        ancestorSeparator: " › ",
        uniqueOutputName: "false",
        suiteNameTemplate: "{filepath}",
        classNameTemplate: "{classname}",
        titleTemplate: "{title}",
      },
    ],
  ],
  transform: {
    ".js": "./jest-esm-transformer.cjs",
  },
};
