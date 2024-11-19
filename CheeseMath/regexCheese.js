// The regexCheese function checks if a cheese name matches a specific pattern
const regexCheese = (cheeseName, pattern) => {
  // Log the cheese name and pattern for clarity
  console.log(`Checking if the cheese name "${cheeseName}" matches the pattern "${pattern}".`);

  // Create a new RegExp object from the provided pattern
  const regex = new RegExp(pattern, 'i'); // 'i' flag for case-insensitive matching

  // Test if the cheese name matches the pattern and return the result
  return regex.test(cheeseName);
};

module.exports = regexCheese;
