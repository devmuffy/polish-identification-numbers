import { calculateChecksum, NUMBERS_ONLY_REGEX } from "../utils";

const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
const REMAINDER_OF_MODULO_TO_CENTURY: Record<number, number> = {
  0: 1900,
  20: 2000,
  40: 2100,
  60: 2200,
  80: 1800,
};

export function isValidDate(pesel: string): boolean {
  const decade = Number(pesel.slice(0, 2));
  const encodedMonth = Number(pesel.slice(2, 4));
  const day = Number(pesel.slice(4, 6));

  // calculate the century and sum up the actual year
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
    !isValidDate(pesel)
  ) {
    return false;
  }

  const digits = pesel.split("").map(Number);
  const checkDigit = digits[10];
  const sum = calculateChecksum(digits.slice(0, 10), WEIGHTS);
  const modulo = sum % 10;

  return (modulo === 0 && checkDigit === 0) || 10 - modulo === checkDigit;
}
