const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((acc, current) => acc += current, 0);
};



const multiply = function(numbers) {
  return numbers.reduce((acc, current) => acc *= current);
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(num) {
	result = 1;
  for(let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
