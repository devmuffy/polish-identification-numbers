import { isUpperCaseCharacter, UpperCaseCharacter } from "./guards";
import { calculateChecksum, isNumeric, splitAt } from "../utils";

const LETTER_VALUES: Record<UpperCaseCharacter, number> = {
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

export function isValidIdDocument(
  number: string,
  length: number,
  letterLength: number,
  weights: number[]
): boolean {
  if (typeof number !== "string" || number.length !== length) {
    return false;
  }

  const [letters, numerals] = splitAt(letterLength, number.split(""));
  const upperCaseLetters = letters.map((letter) => letter.toUpperCase());

  if (
    !upperCaseLetters.every(isUpperCaseCharacter) ||
    !numerals.every(isNumeric)
  ) {
    return false;
  }

  const numbersAndDigits = [
    ...upperCaseLetters.map((letter) => LETTER_VALUES[letter]),
    ...numerals.map(Number),
  ];
  const modulo = calculateChecksum(numbersAndDigits, weights) % 10;

  return modulo === 0;
}
