// sumOfArray: Calculates the sum of all numbers in an array
const sumOfArray = (arr) => {
  // Ensure the input is an array and contains only numbers
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== 'number')) {
    throw new Error('Input must be an array of numbers.');
  }
  // Use reduce to calculate the sum
  return arr.reduce((sum, num) => sum + num, 0);
};

// reverseString: Reverses the input string
const reverseString = (str) => {
  // Ensure the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  // Split, reverse, and join the string
  return str.split('').reverse().join('');
};

// isPalindrome: Checks if a string reads the same forwards and backwards
const isPalindrome = (str) => {
  // Ensure the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare the string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
};

// capitalizeWords: Capitalizes the first letter of each word in a string
const capitalizeWords = (str) => {
  // Ensure the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  // Split by spaces, capitalize, and join back
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Export all functions for testing
module.exports = { sumOfArray, reverseString, isPalindrome, capitalizeWords };