// Importing the consolidated math functions file
const {
  addCheese,
  subtractCheese,
  multiplyCheese,
  divideCheese,
  cheeseSqrt,
  maxCheese,
} = require('../mathFunctions'); // Update the path to your new file

const regexCheese = require('../regexCheese');
const {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
} = require('../advancedCheeseFunctions');

// This function is called addCheese. It takes two numbers as inputs, 
// which we’re thinking of as slices of cheese, and adds them together.
const addCheese = (a, b) => {
  // I’m using template literals here because they make it easier to spell out 
  // the words and incorporate variables smoothly. It also adds a bit of fun to the code!
  console.log(`Adding ${a} slices of cheese to ${b} slices of cheese.`);
  // After adding the slices, the function gives back the total number of slices.
  return a + b;
};

// Finds the square root of a number.
const cheeseSqrt = (a) => {
  // Log the input value
  console.log(`Calculating the square root of ${a}.`);

  // Check if the input is a negative number
  if (a < 0) {
    console.error(`Cannot calculate the square root of a negative number: ${a}`);
    throw new Error('Cannot calculate square root of a negative number.');
  }

  // Return the square root for non-negative input
  return Math.sqrt(a);
};

// The divideCheese function divides one number by another,
// representing blocks of cheese being divided among people.
const divideCheese = (a, b) => {
  // We check if the divisor (b) is zero because dividing by zero doesn’t work.
  if (b === 0) {
    // If b is zero, we stop everything and throw an error.
    throw new Error("Cannot divide cheese by zero.");
  }
  // Otherwise, we log the division and return the result.
  console.log(`Dividing ${a} blocks of cheese by ${b} people.`);
  return a / b; // This gives us how much cheese each person gets.
};

// The maxCheese function compares two numbers,
// which we're thinking of as blocks of cheese, to find the larger one.
const maxCheese = (a, b) => {
  // We log the comparison to see which block has more cheese.
  console.log(`Comparing ${a} and ${b} blocks of cheese to find the maximum.`);
  // The function returns the larger of the two numbers.
  return Math.max(a, b);
};

// The multiplyCheese function multiplies two numbers,
// imagining one as blocks of cheese and the other as slices per block.
const multiplyCheese = (a, b) => {
  // We log the multiplication to visualize the total amount of cheese.
  console.log(`Multiplying ${a} blocks of cheese by ${b} slices per block.`);
  // The function returns the total number of slices.
  return a * b;
};

const subtractCheese = (a, b) => {
  console.log(`Subtracting ${b} slices of cheese from ${a} slices of cheese.`);
  return a - b;
};

// Exporting all functions together as a "single module"
module.exports = {
  advancedCheeseFunctions,
  addCheese,
  subtractCheese,
  multiplyCheese,
  divideCheese,
  cheeseSqrt,
  maxCheese,
  regexCheese,
};
