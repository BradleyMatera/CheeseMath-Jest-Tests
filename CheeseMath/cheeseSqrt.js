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

// Export the function
module.exports = cheeseSqrt;