const repeatString = function (str, num) {

    if (num < 0) {
        return "ERROR";
    }
    let stringArr = [];

    for (let i = 0; i < num; i++) {

        stringArr.push(str);

    }
    return stringArr.join("");
}
// Do not edit below this line
module.exports = repeatString;
