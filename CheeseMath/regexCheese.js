/**
 * Lesson: Understanding and Using Regular Expressions (Regex)
 * 
 * Overview:
 * Regular Expressions (regex) are powerful tools for pattern matching and text manipulation.
 * They allow us to efficiently search, validate, extract, and replace text using concise patterns.
 * This file, `regexCheese.js`, demonstrates how regex can be used in JavaScript, specifically for
 * flexible searches and validations of cheese names.
 */

// The regexCheese function is designed to test if a given cheese name matches a specific regex pattern.
const regexCheese = (cheeseName, pattern) => {
  /**
   * Step 1: Input Validation
   * Before we use regex, we need to validate the inputs to ensure predictable behavior.
   * - cheeseName: The name of the cheese we want to test (string).
   * - pattern: The regex pattern we want to use for testing (string).
   * If either input is not a string, we throw an error.
   */
  if (typeof cheeseName !== 'string' || typeof pattern !== 'string') {
    throw new Error('Both cheeseName and pattern must be strings.');
  }

  console.log(`Attempting to match cheese name "${cheeseName}" against pattern "${pattern}".`);

  /**
   * Step 2: Creating the Regex Object
   * We use JavaScript's RegExp class to create a regex object from the given pattern.
   * - The 'i' flag makes the pattern case-insensitive.
   * - This means "CHEDDAR" will match "cheddar" or "Cheddar".
   * 
   * Example:
   * const regex = new RegExp('cheddar', 'i');
   * This matches strings like:
   * - "cheddar cheese"
   * - "CHEDDAR"
   * - "Cheddar Crumble"
   */
  let regex;
  try {
    regex = new RegExp(pattern, 'i');
    console.log(`Regex object created successfully: /${pattern}/i`);
  } catch (error) {
    console.error(`Error: Invalid regex pattern provided: "${pattern}"`);
    throw new Error(`Invalid regex pattern: ${error.message}`);
  }

  /**
   * Step 3: Testing the Pattern
   * The `.test()` method is used to check if the regex matches the cheeseName string.
   * - Returns true if there is a match, false otherwise.
   * 
   * Example:
   * regex.test('Cheddar Cheese') // Returns true if 'cheddar' is in the string.
   */
  const matchResult = regex.test(cheeseName);

  // Log the outcome of the match for clarity.
  if (matchResult) {
    console.log(`Success: "${cheeseName}" matches the pattern "${pattern}".`);
  } else {
    console.log(`Failure: "${cheeseName}" does NOT match the pattern "${pattern}".`);
  }

  // Return the boolean result of the regex test.
  return matchResult;
};

module.exports = regexCheese;

/**
 * -------------------------------------------------
 * Technical Notes: Regex Features Highlighted Here
 * -------------------------------------------------
 * 
 * 1. **Case-Insensitive Matching with 'i' Flag:**
 *    - Ensures the pattern matches regardless of case (e.g., 'CHEDDAR' == 'cheddar').
 * 
 * 2. **Anchors (^, $):**
 *    - Use `^` to match the start of a string.
 *    - Use `$` to match the end of a string.
 *    - Example: 
 *        - `^Cheddar` matches "Cheddar Cheese" but not "Aged Cheddar".
 *        - `Cheese$` matches "Cheddar Cheese" but not "Cheese Please!".
 * 
 * 3. **Character Classes ([a-z]):**
 *    - Define a set or range of characters to match.
 *    - Example:
 *        - `[a-z]` matches any lowercase letter.
 *        - `[A-Z]` matches any uppercase letter.
 *        - `[0-9]` matches any digit.
 * 
 * 4. **Quantifiers ({X, Y}):**
 *    - Specify how many times a character or group should appear.
 *    - Example:
 *        - `a{2}` matches "aa".
 *        - `a{2,4}` matches "aa", "aaa", or "aaaa".
 * 
 * 5. **Capturing Groups ((...)):**
 *    - Group parts of the regex for extracting matches.
 *    - Example:
 *        - `(\w+) Cheese` matches "Cheddar Cheese" and captures "Cheddar".
 * 
 * --------------------------------
 * Practical Examples Using regexCheese
 * --------------------------------
 * 
 * const regexCheese = require('./regexCheese');
 * 
 * Example 1: Basic Matching
 * regexCheese('Cheddar Cheese', 'cheddar'); // true
 * regexCheese('Blue Cheese', 'cheddar');   // false
 * 
 * Example 2: Anchors
 * regexCheese('Cheddar Cheese', '^Cheddar'); // true
 * regexCheese('Aged Cheddar', '^Cheddar');   // false
 * regexCheese('Cheddar Cheese', 'Cheese$');  // true
 * 
 * Example 3: Character Classes
 * regexCheese('Cheddar123', '[0-9]');        // true (contains a digit)
 * regexCheese('JustCheese', '[0-9]');       // false (no digits)
 * 
 * Example 4: Capturing Groups
 * regexCheese('Gouda Cheese', '(Gouda)');   // true (matches "Gouda")
 * regexCheese('Swiss Cheese', '(Gouda)');   // false
 * 
 * --------------------------------
 * Summary:
 * Regular expressions are powerful tools for pattern matching and text processing.
 * With `regexCheese`, you can validate and search cheese names using flexible patterns.
 * Use this function as a starting point to explore more about regex, and leverage tools
 * like Regex101.com to test and refine your patterns.
 */