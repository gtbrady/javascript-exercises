/* 
Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa

to Fahrenheit
(0°C × 9/5) + 32 = 32°F

to Celsius
(0°F − 32) × 5/9 = -17.78°C 
*/


const convertToCelsius = function(fahrenheit) {
  const conversion = (fahrenheit - 32) * (5/9);
  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const conversion = (celsius * (9/5)) + 32;
  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
