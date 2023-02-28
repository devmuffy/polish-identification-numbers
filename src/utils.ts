export const NUMBERS_ONLY_REGEX = /^\d+$/;

export function calculateChecksum(digits: number[], weights: number[]): number {
  if (digits.length !== weights.length) {
    throw new Error(
      "The length of the weights is not equal to the length of the digits."
    );
  }

  return digits
    .map((digit, index) => digit * weights[index])
    .reduce((sum, number) => sum + number, 0);
}
