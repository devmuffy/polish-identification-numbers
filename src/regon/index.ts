import { calculateChecksum, NUMBERS_ONLY_REGEX } from "../utils";

const WEIGHTS_REGON_9 = [8, 9, 2, 3, 4, 5, 6, 7];
const WEIGHTS_REGON_14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];

export function isValidRegon(regon: string): boolean {
  if (
    typeof regon !== "string" ||
    ![9, 14].includes(regon.length) ||
    !NUMBERS_ONLY_REGEX.test(regon)
  ) {
    return false;
  }

  const digits = regon.split("").map((digit) => parseInt(digit, 10));
  const sum9 = calculateChecksum(digits.slice(0, 8), WEIGHTS_REGON_9);
  const checkDigit9 = digits[8];
  const modulo9 = sum9 % 11;
  const isValid9 =
    (modulo9 === 10 && checkDigit9 === 0) || modulo9 === checkDigit9;

  if (regon.length === 9) {
    return isValid9;
  }

  const sum14 = calculateChecksum(digits.slice(0, 13), WEIGHTS_REGON_14);
  const checkDigit14 = digits[13];
  const modulo14 = sum14 % 11;

  return (
    isValid9 &&
    ((modulo14 === 10 && checkDigit14 === 0) || modulo14 === checkDigit14)
  );
}
