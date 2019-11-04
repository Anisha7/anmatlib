
// Adds a goldenRatio property to Number
Number.prototype.goldenRatio = 1.61803398875

// round() - x = 9.99 - x.round() -> 10
Number.prototype.round = function () {
    return Math.round(this)
}

// floor() - x = 9.99 - x.floor() -> 9
Number.prototype.floor = function () {
    return Math.floor(this)
}

// ceil() - x = 1.03 - x.ceil() -> 2
Number.prototype.ceil = function () {
    return Math.ceil(this)
}

// pads Number with x 0s before '.' and y 0s after '.'
// Example: 34.801.pad(4,4) -> 0034.8010
Number.prototype.pad = function (x, y) {
    let result = this.toFixed(y).toString().split('.')
    while (x >= result[0].length) {
        result[0] = '0' + result[0]
        x -= 1
    }

    return result.join('.')
}

// takes a number and returns the results of this formula: deg * (Math.PI / 180)
// throws error if the value input is not a number or is not included
Number.prototype.degToRad = function () {
    if ( Number.isNaN(this) ) {
        console.log("error")
        throw new TypeError("Not a number");
    }
    return Number((this * (Math.PI/180)).toFixed(3))
}

//  Covert radians to degrees from this formula: radians * (180/pi)
// throws error if the value input is not a number or is not included
Number.prototype.radToDeg = function () {
    if ( Number.isNaN(this) ) {
        console.log("error")
        throw new TypeError("Not a number");
    }
    return Number((this * (180/Math.PI)).toFixed(3))
}

// take a numeric value and return a string beginning with a '$' and rounded to two decimal places
// Example: toDollars(3.9) -> $3.90 (Note: pads with a 0)
Number.prototype.toDollars = function () {
    return '$' + this.toFixed(2).toString()
}