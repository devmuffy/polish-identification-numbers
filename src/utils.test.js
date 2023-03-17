import { describe, expect, test } from "vitest";
import {
  calculateChecksum,
  isNumeric,
  splitAt,
  splitEvery,
  take,
} from "./utils";

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

describe("isNumeric", () => {
  test.each([
    ["123", true],
    ["0", true],
    [123, true],
    ["abc", false],
    ["-456", false],
    ["1.23", false],
    ["", false],
    [-123, false],
    [null, false],
    [undefined, false],
  ])("isNumeric(%s) -> %s", (input, expected) => {
    expect(isNumeric(input)).toBe(expected);
  });
});

describe("splitAt", () => {
  // prettier-ignore
  test.each([
    [
      0,
      [1, 2, 3, 4],
      [[], [1, 2, 3, 4]]
    ],
    [
      1,
      [1, 2, 3, 4],
      [[1], [2, 3, 4]]
    ],
    [
      2,
      [1, 2, 3, 4],
      [[1, 2], [3, 4]]
    ],
    [
      5,
      [1, 2, 3, 4],
      [[1, 2, 3, 4], []]
    ],
    [
      3,
      "foobar",
      ["foo", "bar"]
    ]
  ])("splitAt(%i, %o) -> %o", (size, arrayOrString, expected) => {
    expect(splitAt(size, arrayOrString)).toStrictEqual(expected);
  });
});

describe("splitEvery", () => {
  // prettier-ignore
  test.each([
    [
      2,
      [1, 1, 2, 2, 3, 3],
      [[1, 1], [2, 2], [3, 3]],
    ],
    [
      2,
      "112233",
      ["11", "22", "33"]
    ],
  ])("splitEvery(%i, %o) -> %o", (size, arrayOrString, expected) => {
    expect(splitEvery(size, arrayOrString)).toStrictEqual(expected);
  });
});

describe("take", () => {
  // prettier-ignore
  test.each([
    [
      2,
      [1, 2, 3, 4],
      [1, 2]
    ],
    [
      3,
      "1234",
      "123"
    ],
  ])("take(%i, %o) -> %o", (size, arrayOrString, expected) => {
    expect(take(size, arrayOrString)).toStrictEqual(expected);
  });
});
