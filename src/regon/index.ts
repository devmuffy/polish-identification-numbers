import { calculateChecksum, isNumeric, splitAt } from "../utils";

const WEIGHTS_REGON_9 = [8, 9, 2, 3, 4, 5, 6, 7];
const WEIGHTS_REGON_14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];

/**
 * @example
 * isValidRegon("834898478")
 * @example
 * isValidRegon("09796377087762")
 */
export function isValidRegon(regon: string): boolean {
  if (
    typeof regon !== "string" ||
    ![9, 14].includes(regon.length) ||
    !isNumeric(regon)
  ) {
    return false;
  }

  const digits = regon.split("").map(Number);
  const [digits9, [checkDigit9]] = splitAt(8, digits);
  const modulo9 = calculateChecksum(digits9, WEIGHTS_REGON_9) % 11;
  const isValid9 =
    (modulo9 === 10 && checkDigit9 === 0) || modulo9 === checkDigit9;

  if (regon.length === 9) {
    return isValid9;
  }

  const [digits14, [checkDigit14]] = splitAt(13, digits);
  const modulo14 = calculateChecksum(digits14, WEIGHTS_REGON_14) % 11;

  return (
    isValid9 &&
    ((modulo14 === 10 && checkDigit14 === 0) || modulo14 === checkDigit14)
  );
}
