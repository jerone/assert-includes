# assert-includes

> Assert string includes

Assert that an value is included in a string.

## Installation

Most likely you want to use this package as development dependency.

```sh
npm install @jerone/assert-includes --save-dev
```

Or with Yarn:
```sh
yarn add @jerone/assert-includes --dev
```

## Usage

```js
import assertIncludes from '@jerone/assert-includes';

test("value contains string", () => {
  assertIncludes("abc", "a");
});
```

If the test fails, it will throw an `AssertionError`,
which can be picked up by your testing library.

For example with Jest, it will produce the following log:

![Jest log](https://raw.githubusercontent.com/jerone/assert-includes/master/docs/failing-test.png)

## API

### assertIncludes(value, includes)

Returns `true` when valid or throws `AssertionError` when invalid.

#### value

Type: `string`

Actual value expected to contain the included text.

#### includes

Type: `string`

The text that is expected to be part of the `value`.

<br/>
<br/>

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://stand-with-ukraine.pp.ua)
