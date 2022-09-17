import { calculateChecksum, NUMBERS_ONLY_REGEX } from "../utils";

const WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];

export const isValidNip = (nip: string): boolean => {
  if (
    typeof nip !== "string" ||
    nip.length !== 10 ||
    !NUMBERS_ONLY_REGEX.test(nip)
  ) {
    return false;
  }

  const digits = nip.split("").map((digit) => parseInt(digit, 10));
  const checkDigit = digits[9];
  const sum = calculateChecksum(digits.slice(0, 9), WEIGHTS);
  const modulo = sum % 11;

  return modulo === checkDigit;
};
