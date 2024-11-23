// Utility functions for cheese calculations
export const addCheese = (a, b) => a + b;
export const subtractCheese = (a, b) => a - b;
export const multiplyCheese = (a, b) => a * b;
export const divideCheese = (a, b) => {
  if (b === 0) throw new Error("Cannot divide cheese by zero.");
  return a / b;
};
export const cheeseSqrt = (a) => {
  if (a < 0) throw new Error("Cannot calculate the square root of negative cheese.");
  return Math.sqrt(a);
};
export const maxCheese = (a, b) => Math.max(a, b);