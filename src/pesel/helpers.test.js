import { describe, expect, test } from "vitest";
import { parseDate } from "./helpers";

describe("parseDate", () => {
  test.each([
    ["000101", new Date(1900, 0, 1)],
    ["001001", new Date(1900, 9, 1)],
  ])("%o is a valid PESEL date", (pesel, expected) =>
    expect(parseDate(pesel)).toStrictEqual(expected)
  );

  test.each([
    ["002101", new Date(2000, 0, 1)],
    ["004101", new Date(2100, 0, 1)],
    ["006101", new Date(2200, 0, 1)],
    ["008101", new Date(1800, 0, 1)],
  ])("%o is a valid PESEL date - another century", (pesel, expected) =>
    expect(parseDate(pesel)).toStrictEqual(expected)
  );

  test.each(["000000", "000001", "002001", "000140"])(
    "%o is a invalid PESEL date",
    (pesel) => expect(parseDate(pesel)).toBeNull()
  );

  test.each(["000231", "000431"])(
    "%o is a invalid PESEL date - non-existent day",
    (pesel) => expect(parseDate(pesel)).toBeNull()
  );
});
