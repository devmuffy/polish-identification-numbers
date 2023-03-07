import {
  calculateChecksum,
  NUMBERS_ONLY_REGEX,
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

export function isValidDate(pesel: string): boolean {
  const [decade, encodedMonth, day] = splitEvery(2, pesel).map(Number);

  const month = encodedMonth % 20;
  const century = REMAINDER_OF_MODULO_TO_CENTURY[encodedMonth - month];
  const year = century + decade;

  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, day);

  // if any parameter overflows the defined bounds,
  // it "carries over", so the parsed date must be compared
  return (
    date.getDate() === day &&
    date.getMonth() === monthIndex &&
    date.getFullYear() === year
  );
}

/**
 * @example
 * isValidPesel("99041827235")
 */
export function isValidPesel(pesel: string): boolean {
  if (
    typeof pesel !== "string" ||
    pesel.length !== 11 ||
    !NUMBERS_ONLY_REGEX.test(pesel) ||
    !isValidDate(take(6, pesel))
  ) {
    return false;
  }

  const [digits, [checkDigit]] = splitAt(10, pesel.split("").map(Number));
  const modulo = calculateChecksum(digits, WEIGHTS) % 10;

  return (modulo === 0 && checkDigit === 0) || 10 - modulo === checkDigit;
}
