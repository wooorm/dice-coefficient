# dice-coefficient [![Build Status](https://travis-ci.org/wooorm/dice-coefficient.svg?branch=master)](https://travis-ci.org/wooorm/dice-coefficient) [![Coverage Status](https://img.shields.io/coveralls/wooorm/dice-coefficient.svg)](https://coveralls.io/r/wooorm/dice-coefficient?branch=master)

[![browser support](https://ci.testling.com/wooorm/dice-coefficient.png) ](https://ci.testling.com/wooorm/dice-coefficient)

---

The [Sørensen–Dice coefficient](http://en.wikipedia.org/wiki/Sørensen–Dice_coefficient) algorithm in JavaScript.

## Installation

NPM:
```sh
$ npm install dice-coefficient
```

Component.js:
```sh
$ component install wooorm/dice-coefficient
```

## Usage

```js
var diceCoefficient = require('dice-coefficient');

diceCoefficient("abc", "abc"); // 1
diceCoefficient("abc", "xyz"); // 0
diceCoefficient("night", "nacht"); // 0.25

/* Case insensitive */
diceCoefficient("night", "nacht") === diceCoefficient("NiGhT", "NACHT"); // true
```

## Other Lancaster implementations

- [NaturalNode/natural](https://github.com/NaturalNode/natural);
- [Yomguithereal/clj-fuzzy](https://github.com/Yomguithereal/clj-fuzzy) — A bit slow.
- [minuteman3/node-dice](https://github.com/minuteman3/node-dice) — Does not check bigrams, rather just unigrams. Thus producing different results (e.g., the difference between “nacht” and “night” according to node-dice is 0.6 rather than, [according to the formula](http://en.wikipedia.org/wiki/Dice%27s_coefficient#Formula), 0.25)

## Benchmark

Run the benchmark yourself:

```sh
$ npm run install-benchmark # Just once of course.
$ npm run benchmark
```

On a MacBook Air, it runs about 748,000 op/s, which is more than 4 times faster than natural.

```
           dice-coefficient
  748 op/s » op/s * 1,000

           natural
  154 op/s » op/s * 1,000

           clj-fuzzy
   10 op/s » op/s * 1,000
```

## License

  MIT
