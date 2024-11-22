// Import math functions from the consolidated file
const {
  addCheese,
  subtractCheese,
  multiplyCheese,
  divideCheese,
  cheeseSqrt,
  maxCheese,
} = require('../mathFunctions');

// Import regexCheese from its original file
const regexCheese = require('../regexCheese');

// Import advanced cheese functions
const {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
} = require('../advancedCheeseFunctions');

// Test for the addition function
describe('Cheese Addition Function', () => {
  test('Adds two positive numbers correctly', () => {
    expect(addCheese(3, 2)).toBe(5);
  });

  test('Handles adding zero', () => {
    expect(addCheese(5, 0)).toBe(5);
  });

  test('Handles negative numbers', () => {
    expect(addCheese(-3, -2)).toBe(-5);
  });
});

// Test for the subtraction function
describe('Cheese Subtraction Function', () => {
  test('Subtracts two positive numbers correctly', () => {
    expect(subtractCheese(5, 2)).toBe(3);
  });

  test('Handles subtracting zero', () => {
    expect(subtractCheese(5, 0)).toBe(5);
  });

  test('Handles negative numbers', () => {
    expect(subtractCheese(-5, -2)).toBe(-3);
  });
});

// Test for the multiplication function
describe('Cheese Multiplication Function', () => {
  test('Multiplies two positive numbers correctly', () => {
    expect(multiplyCheese(4, 3)).toBe(12);
  });

  test('Handles multiplication by zero', () => {
    expect(multiplyCheese(4, 0)).toBe(0);
  });

  test('Handles negative numbers', () => {
    expect(multiplyCheese(-4, 3)).toBe(-12);
  });
});

// Test for the division function
describe('Cheese Division Function', () => {
  test('Divides two positive numbers correctly', () => {
    expect(divideCheese(10, 2)).toBe(5);
  });

  test('Handles division by one', () => {
    expect(divideCheese(10, 1)).toBe(10);
  });

  test('Throws error for division by zero', () => {
    expect(() => divideCheese(10, 0)).toThrow('Cannot divide cheese by zero.');
  });

  test('Handles negative numbers', () => {
    expect(divideCheese(-10, 2)).toBe(-5);
  });
});

// Test for the square root function
describe('Cheese Square Root Function', () => {
  test('Calculates the square root of a positive number', () => {
    expect(cheeseSqrt(16)).toBe(4);
  });

  test('Throws error for negative numbers', () => {
    expect(() => cheeseSqrt(-16)).toThrow('Cannot calculate square root of a negative number.');
  });

  test('Handles zero', () => {
    expect(cheeseSqrt(0)).toBe(0);
  });
});

// Test for the maximum function
describe('Cheese Maximum Function', () => {
  test('Finds the maximum between two numbers', () => {
    expect(maxCheese(10, 20)).toBe(20);
  });

  test('Handles negative numbers', () => {
    expect(maxCheese(-10, -20)).toBe(-10);
  });

  test('Handles equal numbers', () => {
    expect(maxCheese(10, 10)).toBe(10);
  });
});

// Test for regexCheese function
describe('Cheese Regex Function', () => {
  test('Matches a pattern in a string', () => {
    expect(regexCheese('Cheddar Cheese', 'cheddar')).toBe(true);
  });

  test('Does not match a pattern not present in the string', () => {
    expect(regexCheese('Blue Cheese', 'cheddar')).toBe(false);
  });

  test('Handles case-insensitive matches', () => {
    expect(regexCheese('Gouda Cheese', 'g.*a')).toBe(true);
  });

  test('Handles no match case', () => {
    expect(regexCheese('Swiss Cheese', 'brie')).toBe(false);
  });
});

// Advanced cheese function tests remain unchanged

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