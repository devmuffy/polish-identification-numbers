export const calculateChecksum = (digits: number[], weights: number[]) => {
  if (digits.length !== weights.length) {
    throw new Error(
      "The length of the weights is not equal to the length of the digits."
    );
  }

  return digits
    .map((digit, index) => digit * weights[index])
    .reduce((sum, number) => sum + number, 0);
};
