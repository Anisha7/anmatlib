![npm](https://img.shields.io/npm/v/anmatlib) ![GitHub package.json version](https://img.shields.io/github/package-json/v/anisha7/anmatlib) ![GitHub repo size](https://img.shields.io/github/repo-size/anisha7/anmatlib?style=plastic) ![GitHub last commit](https://img.shields.io/github/last-commit/anisha7/anmatlib?style=plastic) ![GitHub top language](https://img.shields.io/github/languages/top/anisha7/anmatlib) ![GitHub issues](https://img.shields.io/github/issues-raw/anisha7/anmatlib) ![npm collaborators](https://img.shields.io/npm/collaborators/anmatlib) ![GitHub followers](https://img.shields.io/github/followers/anisha7?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/anisha7/anmatlib?style=social)[![Coverage Status](https://coveralls.io/repos/github/Anisha7/anmatlib/badge.svg?branch=master)](https://coveralls.io/github/Anisha7/anmatlib?branch=master)

# anmatlib
 A Javascript math library


## How to use:

#### goldenRatio
Returns the goldenRatio property of Number

`const x = 5
x.goldenRatio // 1.61803398875
`

#### round()
Rounds a number

`const x = 5.9
x.round() // 6
`

#### round()
Rounds down a number

`const x = 5.9
x.floor() // 5
`

#### ceil()
Rounds up a number

`const x = 1.03
x.ceil() // 2
`

#### pad(x, y)
Pads a number with x 0s before '.' and y 0s after '.'

`const x = 34.801
x.pad(4,4) // 0034.8010

const y = 34.801
y.pad(4,3) // 0034.801
`

#### degToRad()
Takes a number and returns the results of this formula: deg * (Math.PI / 180)

`const x = 45
x.degToRad() // 0.785

const y = "a"
y.degToRad() // TypeError
`

#### radToDeg()
Covert radians to degrees from this formula: radians * (180/pi)

`const x = 0.785
x.radToDeg() // 44.977

const y = "a"
y.degToRad() // TypeError
`

#### toDollars()
Take a numeric value and return a string beginning with a '$' and rounded to two decimal places

`const x = 34.801
x.toDollars() // $34.80;

const y = 2
y.toDollars(4,3) // $2.00
`

#### tax(n)
Returns the tax amount

`const x = 32.01
x.tax(0.56) // 32.57
`

#### interest(total, year, rate)
Calculates the interest over time

`Number.interest(100, 1, 1) // 101`

#### mortage(principal, numberOfPayments, interestRate)
Calculates mortage: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

`Number.mortage(100000, 30, 3.92) // 392000`

#### intToHex()
Converts int to hex

`const x = 20
x.intToHex() // 14`

#### random(n)
Returns an integer from 0 to n - 1

`const x = Number.random(5)
x < 5 // true`

#### randomRange(min, max)
Returns an integer from min to max

`const x = Number.randomRange(2, 5)
x < 5 // true
x > 2 // true`

#### randomColor(n)
Returns a random hex color

`const a = Number.randomColor() // returns a random color in hex`