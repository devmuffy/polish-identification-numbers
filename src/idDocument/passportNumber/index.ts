import { isValidIdDocument } from "../helpers";

const WEIGHTS = [7, 3, 9, 1, 7, 3, 1, 7, 3];

/**
 * @example
 * isValidPassportNumber("CC7999486")
 */
export function isValidPassportNumber(passportNumber: string): boolean {
  return isValidIdDocument(passportNumber, 9, 2, WEIGHTS);
}
