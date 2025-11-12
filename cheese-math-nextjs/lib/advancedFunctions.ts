/**
 * Advanced String and Array Operations
 */

export const sumOfArray = (arr: number[]): number => {
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== 'number')) {
    throw new Error('Input must be an array of numbers.');
  }
  return arr.reduce((sum, num) => sum + num, 0);
};

export const reverseString = (str: string): string => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  return str.split('').reverse().join('');
};

export const isPalindrome = (str: string): boolean => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
};

export const capitalizeWords = (str: string): string => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const countVowels = (str: string): number => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
};

export const countConsonants = (str: string): number => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return consonants ? consonants.length : 0;
};
