import { AssertionError } from "node:assert";
import { describe, expect, test } from "@jest/globals";
import assertIncludes from "./index.cjs";

describe("assertIncludes CommonJS module", () => {
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
