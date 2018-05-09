function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

// Intentionally not tested so that coverage is not 100%
function multiply(x, y) {
    return x * y;
}

function numberDescription(n) {
    // Intentionally not tested so that coverage is not 100%
    if (n == 0) {
        return 'Zero';
    }
    return n > 0 ? 'Positive' : 'Negative';
}

function filterArray(arr) {
    if (arr.length % 3 === 0) {
        return arr.filter((elt) => {
            return elt > 0;
        });
    } else if (arr.length % 3 === 1) {
        return arr.filter((elt) => {
            return elt < 0;
        });
    }
    return arr.filter((elt) => {
        return elt % 2 === 0;
    });
}

module.exports = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'numberDescription': numberDescription,
    'filterArray': filterArray
};
