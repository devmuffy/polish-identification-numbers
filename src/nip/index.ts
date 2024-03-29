import { calculateChecksum, isNumeric, splitAt } from "../utils";

const WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];

/**
 * @example
 * isValidNip("9165459461");
 * @example <caption>NIP with dashes</caption>
 * isValidNip("123-456-32-18".replaceAll("-", ""));
 */
export function isValidNip(nip: string): boolean {
  if (typeof nip !== "string" || nip.length !== 10 || !isNumeric(nip)) {
    return false;
  }

  const [digits, [checkDigit]] = splitAt(9, nip.split("").map(Number));
  const modulo = calculateChecksum(digits, WEIGHTS) % 11;

  return modulo === checkDigit;
}
