import { expect, test } from "vitest";
import { isValidRegon } from ".";

const regon9 = [
  "095895365",
  "407741201",
  "548098285",
  "610693583",
  "675263840",
  "733728464",
  "755024450",
  "813335406",
  "822768868",
  "834898478",
];

const invalidRegon9 = [
  1,
  null,
  "",
  "11111111a",
  "095892365",
  "407721201",
  "548091285",
  "61069383",
  "675253840",
  "733678464",
  "755046450",
  "813125406",
  "822767868",
  "8348988478",
];

const regon14 = [
  "09796377087762",
  "14907060577243",
  "26016415499285",
  "34686496536591",
  "46206815887683",
  "58582896441710",
  "80016605297305",
  "84652997884502",
  "84769372884040",
  "93671439689400",
];

const invalidRegon14 = [
  1,
  null,
  "",
  "09796377083362",
  "14907060577343",
  "26016415462285",
  "34686496563591",
  "46206815887183",
  "58582896441610",
  "800166052967305",
  "84652997882502",
  "8476937223040",
  "93671439678400",
];

test.each(regon9)("%o is valid 9-digit regon", (regon) =>
  expect(isValidRegon(regon)).toBe(true)
);

test.each(invalidRegon9)("%o is invalid 9-digit regon", (regon) =>
  expect(isValidRegon(regon)).toBe(false)
);

test.each(regon14)("%o is valid 14-digit regon", (regon) =>
  expect(isValidRegon(regon)).toBe(true)
);

test.each(invalidRegon14)("%o is invalid 14-digit regon", (regon) =>
  expect(isValidRegon(regon)).toBe(false)
);
