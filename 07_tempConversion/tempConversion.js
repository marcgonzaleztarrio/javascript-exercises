const convertToCelsius = function (n) {
  let notRoundedC = ((n - 32) * 5) / 9;
  return Math.round(notRoundedC * 10) / 10;
};

const convertToFahrenheit = function (m) {
  let notRoundedF = (m * 9) / 5 + 32;
  return Math.round(notRoundedF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
