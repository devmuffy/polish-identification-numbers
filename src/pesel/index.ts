import { calculateChecksum, NUMBERS_ONLY_REGEX } from "../utils";

const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
const MODULO_REMAINDER_TO_CENTURY = new Map([
  [0, 1900],
  [20, 2000],
  [40, 2100],
  [60, 2200],
  [80, 1800],
]);

const isValidPeselDate = (pesel: string): boolean => {
  const yearShortly = Number(pesel.slice(0, 2));
  const increasedMonth = Number(pesel.slice(2, 4));
  const day = Number(pesel.slice(4, 6));

  // calculate the century and sum up the actual year
  const month = increasedMonth % 20;
  const monthIndex = month - 1;
  const century = MODULO_REMAINDER_TO_CENTURY.get(increasedMonth - month)!;
  const year = century + yearShortly;

  const date = new Date(year, monthIndex, day);

  // if any parameter overflows the defined bounds,
  // it "carries over", so the parsed date must be compared
  return (
    date.getDate() === day &&
    date.getMonth() === monthIndex &&
    date.getFullYear() === year
  );
};

export function isValidPesel(pesel: string): boolean {
  if (
    typeof pesel !== "string" ||
    pesel.length !== 11 ||
    !NUMBERS_ONLY_REGEX.test(pesel)
  ) {
    return false;
  }

  if (!isValidPeselDate(pesel)) {
    return false;
  }

  const digits = pesel.split("").map((char) => parseInt(char, 10));
  const checkDigit = digits[10];
  const sum = calculateChecksum(digits.slice(0, 10), WEIGHTS);
  const modulo = sum % 10;

  return (modulo === 0 && checkDigit === 0) || 10 - modulo === checkDigit;
}

export const exportedForTesting = {
  isValidPeselDate,
};
