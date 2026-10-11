const convertToCelsius = function(feh) {
  const cel = Math.round(((feh - 32)*5/9)*10)/10;
  return cel;
};

const convertToFahrenheit = function(cels) {
  const fehren = Math.round(((cels*9/5)+32)*10)/10;
  return  fehren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
