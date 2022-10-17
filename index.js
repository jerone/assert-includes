function assertIncludes(value, includes) {
  const result = value.includes(includes);

  if (!result) {
    throw new assert.AssertionError({
      message: 'Expected value to contain "includes":',
      actual: value,
      expected: includes,
      operator: "assertIncludes",
    });
  }

  return result;
}

export default assertIncludes;
