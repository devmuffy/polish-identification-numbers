import { describe, expect, test } from "vitest";
import { calculateChecksum } from "./utils";

describe("calculateChecksum", () => {
  test.each([
    [[], [], 0],
    [[1, 2, 3], [1, 2, 3], 14],
    [[0, 10], [5, 5], 50],
  ])("calculateChecksum(%o, %o) -> %i", (digits, weights, expected) => {
    expect(calculateChecksum(digits, weights)).toBe(expected);
  });

  test("throw if lengths do not match", () => {
    const digits = [1, 2, 3];
    const weights = [1, 2];
    expect(() => calculateChecksum(digits, weights)).toThrow();
  });
});

