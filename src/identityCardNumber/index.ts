import { LETTER_VALUES } from "../const";
import { isUpperCaseCharacter } from "../guards";
import { calculateChecksum, isNumeric, splitAt } from "../utils";

const WEIGHTS = [7, 3, 1, 9, 7, 3, 1, 7, 3];

/**
 * @example
 * isValidIdentityCardNumber("KKK111410")
 * @example
 * isValidIdentityCardNumber("KKK 111410".replaceAll(" ", ""))
 */
export function isValidIdentityCardNumber(idNumber: string): boolean {
  if (typeof idNumber !== "string" || idNumber.length !== 9) {
    return false;
  }

  const [letters, numerals] = splitAt(3, idNumber.split(""));
  const upperCaseLetters = letters.map((letter) => letter.toUpperCase());

  if (
    !upperCaseLetters.every(isUpperCaseCharacter) ||
    !numerals.every(isNumeric)
  ) {
    return false;
  }

  const numberAndDigits = [
    ...upperCaseLetters.map((letter) => LETTER_VALUES[letter]),
    ...numerals.map(Number),
  ];
  const sum = calculateChecksum(numberAndDigits, WEIGHTS);
  const modulo = sum % 10;

  return modulo === 0;
}
