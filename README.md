# 🇵🇱 Polish Identification Numbers

A library for validating numbers of:

- identity card (Polish: _dowód osobisty_),
- NIP,
- passport (Polish: _paszport_),
- PESEL,
- REGON.

Simple and written in TypeScript. Bundled with [Microbundle](https://github.com/developit/microbundle).

## Motivation

Inspired by [radarsu's](https://github.com/radarsu)
[validate-polish](https://github.com/radarsu/validate-polish) library. I
disliked the API, so I decided to rewrite the library from scratch.

## Installation

```sh
# NPM
$ npm install polish-identification-numbers

# Yarn
$ yarn add polish-identification-numbers
```

## API

### `isValidIdentityCardNumber`

```ts
import { isValidIdentityCardNumber } from "polish-identification-numbers";

isValidIdentityCardNumber("AAA000000");
```

### `isValidNip`

```ts
import { isValidNip } from "polish-identification-numbers";

isValidNip("9165459461");
isValidNip("123-456-32-18".replaceAll("-", ""));
```

### `isValidPassportNumber`

```ts
import { isValidPassportNumber } from "polish-identification-numbers";

isValidPassportNumber("CC7999486");
```

### `isValidPesel`

```ts
import { isValidPesel } from "polish-identification-numbers";

isValidPesel("02261773497");
```

### `isValidRegon`

Works for both 9-digit and 14-digit numbers.

```ts
import { isValidRegon } from "polish-identification-numbers";

isValidRegon("095895365");
isValidRegon("09796377087762");
```

## Dependencies

None.

## License

MIT
