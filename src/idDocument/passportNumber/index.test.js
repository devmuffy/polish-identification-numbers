import { expect, test } from "vitest";
import { isValidPassportNumber } from ".";

test.each([null, 0, {}, []])(
  "%o is a invalid identity card number, due to incorrect type",
  (passportNumber) => expect(isValidPassportNumber(passportNumber)).toBe(false)
);

test.each(["", "000", "AAA"])(
  "%o is a invalid identity card number, due to incorrect length",
  (passportNumber) => expect(isValidPassportNumber(passportNumber)).toBe(false)
);

test.each(["000000000", "AAAAAAAAA", "ĄĄ0000000"])(
  "%o is a invalid identity card number, due to incorrect format",
  (passportNumber) => expect(isValidPassportNumber(passportNumber)).toBe(false)
);

test.each(["AA0000001", "BB00000000", "AA1000000", "KK0111112"])(
  "%o is a invalid identity card number, due to incorrect checksum",
  (passportNumber) => expect(isValidPassportNumber(passportNumber)).toBe(false)
);

test.each(["AA0000000", "aa0000000", "BA0000300", "CC7999486"])(
  "%o is a valid identity card number",
  (passportNumber) => expect(isValidPassportNumber(passportNumber)).toBe(true)
);
