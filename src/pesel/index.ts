import { calculateChecksum, isNumeric, splitAt, take } from "../utils";
import { parseDate } from "./helpers";

/**
 * @example
 * getDateOfBirthFromPesel("99041827235")
 */
export function getDateOfBirthFromPesel(pesel: string): Date | null {
  if (!isValidPesel(pesel)) {
    return null;
  }

  return parseDate(pesel);
}

export type Gender = "female" | "male" | null;

/**
 * @example
 * getGenderFromPesel("99041827235")
 */
export function getGenderFromPesel(pesel: string): Gender {
  if (!isValidPesel(pesel)) {
    return null;
  }

  return Number(pesel.charAt(9)) % 2 === 0 ? "female" : "male";
}

const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

/**
 * @example
 * isValidPesel("99041827235")
 */
export function isValidPesel(pesel: string): boolean {
  if (
    typeof pesel !== "string" ||
    pesel.length !== 11 ||
    !isNumeric(pesel) ||
    parseDate(take(6, pesel)) === null
  ) {
    return false;
  }

  const [digits, [checkDigit]] = splitAt(10, pesel.split("").map(Number));
  const modulo = calculateChecksum(digits, WEIGHTS) % 10;

  return (modulo === 0 && checkDigit === 0) || 10 - modulo === checkDigit;
}
