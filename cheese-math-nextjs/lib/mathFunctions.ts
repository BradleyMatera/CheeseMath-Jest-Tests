/**
 * Basic Math Operations for CheeseMath
 */

export const addCheese = (a: number, b: number): number => a + b;

export const subtractCheese = (a: number, b: number): number => a - b;

export const multiplyCheese = (a: number, b: number): number => a * b;

export const divideCheese = (a: number, b: number): number => {
  if (b === 0) throw new Error('Cannot divide cheese by zero.');
  return a / b;
};

export const cheeseSqrt = (a: number): number => {
  if (a < 0) throw new Error('Cannot calculate square root of negative cheese.');
  return Math.sqrt(a);
};

export const maxCheese = (a: number, b: number): number => Math.max(a, b);

export const minCheese = (a: number, b: number): number => Math.min(a, b);

export const powerCheese = (base: number, exponent: number): number => Math.pow(base, exponent);

export const moduloCheese = (a: number, b: number): number => {
  if (b === 0) throw new Error('Cannot perform modulo with zero.');
  return a % b;
};
