// sumOfArray: Calculates the sum of all numbers in an array
const sumOfArray = (arr) => {
  // Step 1: Check if the input is a valid array.
  // - Array.isArray(arr): Verifies if the variable `arr` is an array.
  // - arr.some((item) => typeof item !== 'number'): Iterates over the array to check if any element is not a number.
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== 'number')) {
    // If the input is not an array or contains non-number elements, throw an error.
    throw new Error('Input must be an array of numbers.');
  }

  // Step 2: Use the `reduce` method to calculate the sum of the array.
  // - arr.reduce((sum, num) => sum + num, 0):
  //   - `sum` starts as 0 (the initial value).
  //   - Each element (`num`) is added to the `sum`.
  // - Example: For [1, 2, 3], the calculation is:
  //   - Step 1: 0 + 1 = 1
  //   - Step 2: 1 + 2 = 3
  //   - Step 3: 3 + 3 = 6
  return arr.reduce((sum, num) => sum + num, 0);
};

// reverseString: Reverses the input string
const reverseString = (str) => {
  // Step 1: Validate the input to ensure it's a string.
  // - typeof str !== 'string': Checks if `str` is not a string.
  if (typeof str !== 'string') {
    // If the input is not a string, throw an error.
    throw new Error('Input must be a string.');
  }

  // Step 2: Reverse the string.
  // - str.split(''): Converts the string into an array of characters.
  //   - Example: 'hello' -> ['h', 'e', 'l', 'l', 'o']
  // - .reverse(): Reverses the array.
  //   - Example: ['h', 'e', 'l', 'l', 'o'] -> ['o', 'l', 'l', 'e', 'h']
  // - .join(''): Joins the reversed array back into a string.
  //   - Example: ['o', 'l', 'l', 'e', 'h'] -> 'olleh'
  return str.split('').reverse().join('');
};

// isPalindrome: Checks if a string reads the same forwards and backwards
const isPalindrome = (str) => {
  // Step 1: Validate the input to ensure it's a string.
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  // Step 2: Clean the string by removing unwanted characters and normalizing case.
  // - str.replace(/[^a-zA-Z0-9]/g, ''): Removes all non-alphanumeric characters.
  //   - Example: 'A man, a plan, a canal, Panama' -> 'AmanaplanacanalPanama'
  // - .toLowerCase(): Converts the string to lowercase for case-insensitivity.
  //   - Example: 'AmanaplanacanalPanama' -> 'amanaplanacanalpanama'
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Step 3: Compare the cleaned string with its reverse.
  // - cleanStr.split('').reverse().join(''): Reverses the cleaned string.
  //   - Example: 'amanaplanacanalpanama' -> 'amanaplanacanalpanama'
  // - cleanStr === reversed: Checks if the cleaned string is equal to its reverse.
  return cleanStr === cleanStr.split('').reverse().join('');
};

// capitalizeWords: Capitalizes the first letter of each word in a string
const capitalizeWords = (str) => {
  // Step 1: Validate the input to ensure it's a string.
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  // Step 2: Split the string into an array of words.
  // - str.split(' '): Splits the string at each space.
  //   - Example: 'hello world' -> ['hello', 'world']
  return str
    .split(' ')
    .map((word) => {
      // Step 3: Capitalize each word.
      // - word.charAt(0).toUpperCase(): Converts the first character to uppercase.
      //   - Example: 'hello' -> 'H'
      // - word.slice(1): Gets the rest of the word starting from index 1.
      //   - Example: 'hello' -> 'ello'
      // - Combine them: 'H' + 'ello' -> 'Hello'
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    // Step 4: Join the array of words back into a single string.
    // - Example: ['Hello', 'World'] -> 'Hello World'
    .join(' ');
};

// Export all functions for testing
module.exports = { sumOfArray, reverseString, isPalindrome, capitalizeWords };