import { describe, expect, test } from "@jest/globals";
import { AssertionError } from "assert";
import assertIncludes from "./index.js";

describe("assertIncludes module", () => {
  test("value contains string", () => {
    expect(assertIncludes("abc", "a")).toBe(true);
  });

  test("throw exception when value doesn't contains string", () => {
    expect(() => assertIncludes("abc", "xxx")).toThrow(AssertionError);
    expect(() => assertIncludes("abc", "xxx")).toThrow(
      'Expected value to contain "includes":'
    );
  });
});
