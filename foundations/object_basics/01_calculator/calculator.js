const add = function(a , b) { 
  return (a + b);
	
};

const subtract = function(a, b) {
  return (a - b)
	
};

const sum = function(array) {
  if (!array || array.length === 0){
    return 0;}
    else{
  return array.reduce((total, num) => total + num, 0);
};

	
};

const multiply = function(array) {
  if (!array || array.length === 0) {
    return 0;
  }else{
    return array.reduce((total, num) => total * num, 1);
  };

};

const power = function(base, exp) {
  return base ** exp;
	
};

const factorial = function(n) {
  if (!Number.isInteger(n) || n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
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
