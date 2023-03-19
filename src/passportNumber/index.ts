import { LETTER_VALUES } from "../const";
import { isUpperCaseCharacter } from "../guards";
import { calculateChecksum, isNumeric, splitAt } from "../utils";

const WEIGHTS = [7, 3, 9, 1, 7, 3, 1, 7, 3];

/**
 * @example
 * isValidPassportNumber("CC7999486")
 */
export function isValidPassportNumber(passportNumber: string): boolean {
  if (typeof passportNumber !== "string" || passportNumber.length !== 9) {
    return false;
  }

  const [letters, numerals] = splitAt(2, passportNumber.split(""));
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
  const sum = calculateChecksum(numbersAndDigits, WEIGHTS);
  const modulo = sum % 10;

  return modulo === 0;
}
