import { splitEvery } from "../utils";

const REMAINDER_OF_MODULO_TO_CENTURY: Record<number, number> = {
  0: 1900,
  20: 2000,
  40: 2100,
  60: 2200,
  80: 1800,
};

export function parseDate(pesel: string): Date | null {
  const [year, encodedMonth, day] = splitEvery(2, pesel).map(Number);

  const month = encodedMonth % 20;
  const century = REMAINDER_OF_MODULO_TO_CENTURY[encodedMonth - month];
  const fullYear = century + year;

  const monthIndex = month - 1;
  const date = new Date(fullYear, monthIndex, day);

  // if any parameter overflows the defined bounds,
  // it "carries over", so the parsed date must be compared
  return date.getDate() === day &&
    date.getMonth() === monthIndex &&
    date.getFullYear() === fullYear
    ? date
    : null;
}
