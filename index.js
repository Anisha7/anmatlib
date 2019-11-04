
// Adds a goldenRatio property to Number
Number.prototype.goldenRatio = 1.61803398875

Number.prototype.round = function () {
    return Math.round(this)
}

Number.prototype.floor = function () {
    return Math.floor(this)
}

Number.prototype.ceil = function () {
    return Math.ceil(this)
}