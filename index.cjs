var assert = require("node:assert");

/**
 * Assert if `value` contains `includes` string.
 * @param {string} value The value that should contain the `includes` string.
 * @param {string} includes The string that should be inside the `value`.
 * @returns True when `value` contains `includes` string. Otherwise will throw `AssertionError`.
 */
module.exports = function assertIncludes(value, includes) {
  const result = value.includes(includes);
  if (result === true) return true;

  throw new assert.AssertionError({
    message: 'Expected value to contain "includes":',
    actual: value,
    expected: includes,
    operator: "assertIncludes",
  });
}
