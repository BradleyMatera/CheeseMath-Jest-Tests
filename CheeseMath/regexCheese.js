// The regexCheese function checks if a cheese name matches a specific regex pattern.
// This can be used to perform flexible searches or validations on cheese names.
const regexCheese = (cheeseName, pattern) => {
  // Validate inputs to ensure the function behaves predictably
  if (typeof cheeseName !== 'string' || typeof pattern !== 'string') {
    throw new Error('Both cheeseName and pattern must be strings.');
  }

  // Log the inputs for debugging purposes
  console.log(`Checking if the cheese name "${cheeseName}" matches the pattern "${pattern}".`);

  // Attempt to create a new RegExp object from the provided pattern
  let regex;
  try {
    // The 'i' flag makes the matching case-insensitive, so "Cheddar" matches "cheddar" or "CHEDDAR"
    regex = new RegExp(pattern, 'i');
    console.log(`Successfully created regex object from pattern: /${pattern}/i`);
  } catch (error) {
    // If the pattern is invalid, log an error and throw it
    console.error(`Invalid regex pattern provided: "${pattern}"`);
    throw new Error(`Invalid regex pattern: ${error.message}`);
  }

  // Use the RegExp object's test method to check if the cheese name matches the pattern
  const matchResult = regex.test(cheeseName);

  // Log the result of the regex test for transparency
  if (matchResult) {
    console.log(`The cheese name "${cheeseName}" matches the pattern "${pattern}".`);
  } else {
    console.log(`The cheese name "${cheeseName}" does NOT match the pattern "${pattern}".`);
  }

  // Return the boolean result of the regex test
  return matchResult;
};

// Export the regexCheese function to make it usable in other parts of the application
module.exports = regexCheese;