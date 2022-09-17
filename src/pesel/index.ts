import { calculateChecksum, NUMBERS_ONLY_REGEX } from "../utils";

const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

export function isValidPesel(pesel: string): boolean {
  if (
    typeof pesel !== "string" ||
    pesel.length !== 11 ||
    !NUMBERS_ONLY_REGEX.test(pesel)
  ) {
    return false;
  }

  const digits = pesel.split("").map((digit) => parseInt(digit, 10));
  const checkDigit = digits[10];
  const sum = calculateChecksum(digits.slice(0, 10), WEIGHTS);
  const modulo = sum % 10;

  return (modulo === 0 && checkDigit === 0) || 10 - modulo === checkDigit;
}
