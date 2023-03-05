import { calculateChecksum, splitAt } from "../utils";

const FORMAT_REGEX = /^[a-zA-Z]{2}\d{7}$/;
const LETTER_TO_NUMBER: Record<string, number> = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};
const WEIGHTS = [7, 3, 9, 1, 7, 3, 1, 7, 3];

/**
 * @example
 * isValidPassportNumber("CC7999486")
 */
export function isValidPassportNumber(passportNumber: string): boolean {
  if (
    typeof passportNumber !== "string" ||
    passportNumber.length !== 9 ||
    !FORMAT_REGEX.test(passportNumber)
  ) {
    return false;
  }

  const chars = passportNumber.toUpperCase().split("");
  const [letters, digits] = splitAt(2, chars);
  const numbersAndDigits = [
    ...letters.map((letter) => LETTER_TO_NUMBER[letter]),
    ...digits.map(Number),
  ];
  const sum = calculateChecksum(numbersAndDigits, WEIGHTS);
  const modulo = sum % 10;

  return modulo === 0;
}
