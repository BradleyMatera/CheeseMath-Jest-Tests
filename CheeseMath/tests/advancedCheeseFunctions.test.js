// Importing the functions to test
const {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
} = require('../advancedCheeseFunctions');

// Test for sumOfArray function
describe('Sum of Array Function', () => {
  test('Calculates the sum of a valid array of numbers', () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
  });

  test('Throws error for non-array input', () => {
    expect(() => sumOfArray('not an array')).toThrow('Input must be an array of numbers.');
  });

  test('Throws error for array with non-number elements', () => {
    expect(() => sumOfArray([1, '2', 3])).toThrow('Input must be an array of numbers.');
  });

  test('Handles an empty array', () => {
    expect(sumOfArray([])).toBe(0);
  });
});

// Test for reverseString function
describe('Reverse String Function', () => {
  test('Reverses a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('Throws error for non-string input', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string.');
  });

  test('Handles empty strings', () => {
    expect(reverseString('')).toBe('');
  });
});

// Test for isPalindrome function
describe('Palindrome Check Function', () => {
  test('Identifies a valid palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('Returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('Ignores case and special characters', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });

  test('Throws error for non-string input', () => {
    expect(() => isPalindrome(12321)).toThrow('Input must be a string.');
  });
});

// Test for capitalizeWords function
describe('Capitalize Words Function', () => {
  test('Capitalizes the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('Handles single-word strings', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });

  test('Throws error for non-string input', () => {
    expect(() => capitalizeWords(123)).toThrow('Input must be a string.');
  });

  test('Handles empty strings', () => {
    expect(capitalizeWords('')).toBe('');
  });
});