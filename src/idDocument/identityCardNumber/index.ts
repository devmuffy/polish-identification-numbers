import { isValidIdDocument } from "../helpers";

const WEIGHTS = [7, 3, 1, 9, 7, 3, 1, 7, 3];

/**
 * @example
 * isValidIdentityCardNumber("KKK111410")
 * @example
 * isValidIdentityCardNumber("KKK 111410".replaceAll(" ", ""))
 */
export function isValidIdentityCardNumber(idNumber: string): boolean {
  return isValidIdDocument(idNumber, 9, 3, WEIGHTS);
}
