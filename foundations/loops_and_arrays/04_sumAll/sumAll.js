const sumAll = function (a, b) {
   
    if (a < 0 || b < 0 || Math.floor(a) !== a ||
        Math.floor(b) !== b || typeof b !== "number" ||
        typeof a !== "number") {
        return "ERROR"
    }
 const start = Math.min(a, b);
    const end = Math.max(a, b);

    let integers = [];



    for (let i = start; i <= end; i++) {
        integers.push(i);
    }
    return integers.reduce((a, b) => a + b, 0);
};

// Do not edit below this line
module.exports = sumAll;
