# 🇵🇱 Polish Identification Numbers

A library for validating numbers of:

- identity card (Polish: _dowód osobisty_),
- NIP,
- passport (Polish: _paszport_),
- PESEL,
- REGON.

Simple and written in TypeScript. Bundled with [tsup](https://github.com/egoist/tsup).

## Motivation

Inspired by [radarsu's](https://github.com/radarsu)
[validate-polish](https://github.com/radarsu/validate-polish) library. I didn't like the API, so I decided to create one from scratch.

## Installation

```sh
# NPM
$ npm install polish-identification-numbers

# Yarn
$ yarn add polish-identification-numbers
```

## API

### `isValidIdentityCardNumber`

Returns `boolean`. Supports lower case letters.

```ts
import { isValidIdentityCardNumber } from "polish-identification-numbers";

isValidIdentityCardNumber("AAA000000"); // -> true
isValidIdentityCardNumber("aaa000000"); // -> true
```

### `isValidNip`

Returns `boolean`. NIP with hyphens is not supported. Use the built-in `replaceAll` method to remove them.

```ts
import { isValidNip } from "polish-identification-numbers";

isValidNip("9165459461");
isValidNip("123-456-32-18".replaceAll("-", ""));
```

### `isValidPassportNumber`

Returns `boolean`. Supports lower case letters.

```ts
import { isValidPassportNumber } from "polish-identification-numbers";

isValidPassportNumber("CC7999486"); // -> true
isValidPassportNumber("cc7999486"); // -> true
```

### `getDateOfBirthFromPesel`

Returns `Date` object or `null` if PESEL is invalid.

```ts
import { getDateOfBirthFromPesel } from "polish-identification-numbers";

getDateOfBirthFromPesel("91042336426"); // -> new Date(1991, 3, 23)
```

### `getGenderFromPesel`

Returns `Gender` type (`"female"`, `"male"` or `null` if PESEL is invalid).

```ts
import { getGenderFromPesel, Gender } from "polish-identification-numbers";

const gender: Gender = getGenderFromPesel("02321144427"); // -> "female"
```

### `isValidPesel`

Returns `boolean`.

```ts
import { isValidPesel } from "polish-identification-numbers";

isValidPesel("02261773497");
```

### `isValidRegon`

Returns `boolean`. Supports both 9 and 14 digit numbers.

```ts
import { isValidRegon } from "polish-identification-numbers";

isValidRegon("095895365");
isValidRegon("09796377087762");
```

## Features

- no dependencies
- small size
- tree-shakeable

## License

MIT
