# 🇵🇱 Polish Identification Numbers

A library for validating identity card, NIP, PESEL and REGON numbers. Simple and
written in TypeScript. Bundled by
[Microbundle](https://github.com/developit/microbundle).

## Installation

```sh
# NPM
$ npm install polish-identification-numbers

# Yarn
$ yarn add polish-identification-numbers
```

## API

### `isValidIdentityCardNumber(string): boolean`

```js
import { isValidIdentityCardNumber } from "polish-identification-numbers";

isValidIdentityCardNumber("AAA000000"); // => true
```

### `isValidNip(string): boolean`

```js
import { isValidNip } from "polish-identification-numbers";

isValidNip("9165459461"); // => true
```

### `isValidPesel(string): boolean`

```js
import { isValidPesel } from "polish-identification-numbers";

isValidPesel("02261773497"); // => true
```

### `isValidRegon(string): boolean`

Works for both 9-digit and 14-digit numbers.

```js
import { isValidRegon } from "polish-identification-numbers";

isValidRegon("095895365"); // => true
isValidRegon("09796377087762"); // => true
```

## Dependencies

None.

## Credits

Inspired by [radarsu's](https://github.com/radarsu)
[validate-polish](https://github.com/radarsu/validate-polish) library. I
disliked the API, so I decided to implement the library from scratch.

## License

MIT
