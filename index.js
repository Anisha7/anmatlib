
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
    let result = this.toString().split('.')
    while (x >= result[0].length) {
        result[0] = '0' + result[0]
        x -= 1
    }

    while (y > result[1].length) {
        result[1] = result[1] + '0'
        y -= 1
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