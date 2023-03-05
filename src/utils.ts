export const NUMBERS_ONLY_REGEX = /^\d+$/;

export function calculateChecksum(digits: number[], weights: number[]): number {
  if (digits.length !== weights.length) {
    throw new Error(
      "The length of the weights is not equal to the length of the digits."
    );
  }

  let sum = 0;
  for (const i in digits) {
    sum += digits[i] * weights[i];
  }
  return sum;
}
