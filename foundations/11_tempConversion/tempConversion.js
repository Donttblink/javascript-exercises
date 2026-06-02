const convertToCelsius = function(fahrenheit) {
  let converted = (fahrenheit - 32) * (5/9);
  return Math.round(converted *10) / 10;


};
// convert number from fahrenheit to celsius
//use the equation xF =(x-32)*5/9 C

const convertToFahrenheit = function(celsius) {
  let converted =(celsius*(9/5)+32);
  return Math.round(converted *10) / 10;

};
//convert number from celsius to fahrenheit
//use the equation xC= (x*9/5+32)F
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
