// Bringing in all the cheese functions we want to test.
const addCheese = require('./addCheese');
const subtractCheese = require('./subtractCheese');
const multiplyCheese = require('./multiplyCheese');
const divideCheese = require('./divideCheese');
const cheeseSqrt = require('./cheeseSqrt');
const maxCheese = require('./maxCheese');

// Test to check if the addCheese function correctly adds two slices of cheese.
describe('Cheese Addition Function', () => {
  test('Adds 3 slices of cheese + 2 slices of cheese to equal 5 slices of cheese', () => {
    expect(addCheese(3, 2)).toBe(5);
  });
});

// Test to check if the subtractCheese function correctly subtracts slices of cheese.
describe('Cheese Subtraction Function', () => {
  test('Subtracts 5 slices of cheese - 2 slices of cheese to equal 3 slices of cheese', () => {
    expect(subtractCheese(5, 2)).toBe(3);
  });
});

// Test to check if the multiplyCheese function correctly multiplies cheese blocks by slices per block.
describe('Cheese Multiplication Function', () => {
  test('Multiplies 4 blocks of cheese * 3 slices per block to equal 12 slices of cheese', () => {
    expect(multiplyCheese(4, 3)).toBe(12);
  });
});

// Test to check if the divideCheese function correctly divides blocks of cheese among people.
describe('Cheese Division Function', () => {
  test('Divides 10 blocks of cheese by 2 people to equal 5 blocks per person', () => {
    expect(divideCheese(10, 2)).toBe(5);
  });
});

// Test to check if the cheeseSqrt function correctly calculates the square root of cheese slices.
describe('Cheese Square Root Function', () => {
  test('Returns the square root of 16 slices of cheese to equal 4 slices', () => {
    expect(cheeseSqrt(16)).toBe(4);
  });
});

// Test to check if the maxCheese function correctly identifies the maximum between two blocks of cheese.
describe('Cheese Maximum Function', () => {
  test('Returns the maximum of 10 and 20 blocks of cheese to equal 20 blocks', () => {
    expect(maxCheese(10, 20)).toBe(20);
  });
});