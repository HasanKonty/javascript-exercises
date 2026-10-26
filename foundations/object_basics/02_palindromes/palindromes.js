const palindromes = function (str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let opposite = cleanedStr.split("").reverse().join("");
    return opposite === cleanedStr;

};

// Do not edit below this line
module.exports = palindromes;
