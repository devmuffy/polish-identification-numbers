import {
  calculateChecksum,
  isNumeric,
  splitAt,
  splitEvery,
  take,
} from "../utils";

const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
const REMAINDER_OF_MODULO_TO_CENTURY: Record<number, number> = {
  0: 1900,
  20: 2000,
  40: 2100,
  60: 2200,
  80: 1800,
};

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

export function parseDate(pesel: string): Date | null {
  const [year, encodedMonth, day] = splitEvery(2, pesel).map(Number);

  const month = encodedMonth % 20;
  const century = REMAINDER_OF_MODULO_TO_CENTURY[encodedMonth - month];
  const fullYear = century + year;

  const monthIndex = month - 1;
  const date = new Date(fullYear, monthIndex, day);

  // if any parameter overflows the defined bounds,
  // it "carries over", so the parsed date must be compared
  return date.getDate() === day &&
    date.getMonth() === monthIndex &&
    date.getFullYear() === fullYear
    ? date
    : null;
}
