# 🇵🇱 Polish Identification Numbers

A library for validating NIP, PESEL and REGON numbers. Simple and written in TypeScript. Bundled by [Microbundle](https://github.com/developit/microbundle).

## Installation

```sh
# NPM
npm install polish-identification-numbers

# Yarn
yarn add polish-identification-numbers
```

## API

### `isValidNip(nip: string): boolean`

```js
import { isValidNip } from "polish-identification-numbers";

isValidNip("9165459461"); // => true
```

### `isValidPesel(pesel: string): boolean`

```js
import { isValidPesel } from "polish-identification-numbers";

isValidPesel("02261773497"); // => true
```

### `isValidRegon(regon: string): boolean`

Works for both 9-digit and 14-digit numbers.

```js
import { isValidRegon } from "polish-identification-numbers";

isValidRegon("095895365"); // => true
isValidRegon("09796377087762"); // => true
```

## Dependencies

None.

## Credits

Inspired by [radarsu's](https://github.com/radarsu) [validate-polish](https://github.com/radarsu/validate-polish) library. I disliked the API, so I decided to implement the library from scratch.

## License

MIT
