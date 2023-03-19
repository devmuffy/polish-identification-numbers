export function calculateChecksum(digits: number[], weights: number[]): number {
  if (digits.length !== weights.length) {
    throw new Error(
      "Invalid input: the weights array must have the same length as the digits array."
    );
  }

  let sum = 0;
  for (const i in digits) {
    sum += digits[i] * weights[i];
  }
  return sum;
}

export function isNumeric(input: string): boolean {
  return /^\d+$/.test(input);
}

export function splitAt(index: number, input: string): [string, string];
export function splitAt<T>(index: number, input: readonly T[]): [T[], T[]];
export function splitAt<T>(index: number, input: string | readonly T[]) {
  return [input.slice(0, index), input.slice(index, input.length)];
}

export function splitEvery(size: number, input: string): [...string[]];
export function splitEvery<T>(size: number, input: readonly T[]): [...T[]];
export function splitEvery<T>(size: number, input: string | readonly T[]) {
  const result = [];
  let from = 0;
  while (from < input.length) {
    result.push(input.slice(from, (from += size)));
  }
  return result;
}

export function take(size: number, input: string): string;
export function take<T>(size: number, input: readonly T[]): T[];
export function take<T>(size: number, input: string | readonly T[]) {
  return input.slice(0, size);
}
