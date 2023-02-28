import { isValidIdentityCardNumber } from ".";

test.each([null, 0, {}, []])(
  "%o is a invalid identity card number, due to incorrect type",
  (identityCard) => expect(isValidIdentityCardNumber(identityCard)).toBe(false)
);

test.each(["", "000", "AAA"])(
  "%o is a invalid identity card number, due to incorrect length",
  (identityCard) => expect(isValidIdentityCardNumber(identityCard)).toBe(false)
);

test.each(["000000000", "AAAAAAAAA", "ĄĄĄ000000"])(
  "%o is a invalid identity card number, due to incorrect format",
  (identityCard) => expect(isValidIdentityCardNumber(identityCard)).toBe(false)
);

test.each(["AAA000001", "BBB0000000", "AAB000000", "KKK111112"])(
  "%o is a invalid identity card number, due to incorrect checksum",
  (identityCard) => expect(isValidIdentityCardNumber(identityCard)).toBe(false)
);

test.each(["AAA000000", "aaa000000", "BAA000300", "KKK111410"])(
  "%o is a valid identity card number",
  (identityCard) => expect(isValidIdentityCardNumber(identityCard)).toBe(true)
);
