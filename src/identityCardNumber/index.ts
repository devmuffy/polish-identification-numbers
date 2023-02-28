import { calculateChecksum } from "../utils";

const FORMAT_REGEX = /^[a-zA-Z]{3}\d{6}$/;
const LETTER_TO_VALUE = {
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
const WEIGHTS = [7, 3, 1, 9, 7, 3, 1, 7, 3];

/**
 * @example
 * isValidIdentityCardNumber("KKK111410")
 */
export function isValidIdentityCardNumber(idNumber: string) {
  if (
    typeof idNumber !== "string" ||
    idNumber.length !== 9 ||
    !FORMAT_REGEX.test(idNumber)
  ) {
    return false;
  }

  const chars = idNumber.toUpperCase().split("");
  const digits = [
    ...chars.slice(0, 3).map((char) => LETTER_TO_VALUE[char]),
    ...chars.slice(3, 9).map((char) => parseInt(char, 10)),
  ];
  const sum = calculateChecksum(digits, WEIGHTS);
  const modulo = sum % 10;

  return modulo === 0;
}
