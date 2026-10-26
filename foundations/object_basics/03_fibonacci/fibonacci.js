const fibonacci = function(n) {
    let prev = 1;
    let current = 1;
    if (n === 0) return 0;
    if (n === 1 ) return 1;
    if (n === 2 ) return 1;
    if (n <= 0 || !Number.isFinite(n) || n === "" || n === null) {
        return "OOPS";
    }
    else{

    for (let i = 3; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
    return current;
}
};

// Do not edit below this line
module.exports = fibonacci;
