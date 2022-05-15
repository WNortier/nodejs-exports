function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
}

module.exports.add = add;
module.exports.subtract = subtract;

// We can omit the module keyword because var exports = module.exports

exports.add = add;
exports.subtract = subtract;

// exports = add Wont work!