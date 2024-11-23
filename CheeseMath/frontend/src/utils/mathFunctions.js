// Math-related functions

// Adds two numbers
const addCheese = (a, b) => a + b;

// Subtracts two numbers
const subtractCheese = (a, b) => a - b;

// Multiplies two numbers
const multiplyCheese = (a, b) => a * b;

// Divides two numbers, with error handling for division by zero
const divideCheese = (a, b) => {
  if (b === 0) throw new Error('Cannot divide cheese by zero.');
  return a / b;
};

// Calculates the square root of a number, with error handling for negative input
const cheeseSqrt = (a) => {
  if (a < 0) throw new Error('Cannot calculate square root of a negative number.');
  return Math.sqrt(a);
};

// Finds the maximum of two numbers
const maxCheese = (a, b) => Math.max(a, b);

// Export all functions
module.exports = {
  addCheese,
  subtractCheese,
  multiplyCheese,
  divideCheese,
  cheeseSqrt,
  maxCheese,
};