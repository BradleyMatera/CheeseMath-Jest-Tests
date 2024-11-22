/**
 * The regexMatch function checks if a given string matches a specific regex pattern.
 * It is designed to provide flexibility for text validation, search, and pattern matching.
 *
 * @param {string} inputString - The string to be tested against the regex pattern.
 * @param {string} pattern - The regex pattern used to test the input string.
 * @returns {boolean} - Returns true if the input string matches the pattern, otherwise false.
 * 
 * Example Usage:
 * regexMatch('Hello World', '^Hello'); // Returns true
 * regexMatch('Goodbye World', '^Hello'); // Returns false
 * 
 * Why Use This Function?
 * - Simplifies the process of dynamically testing strings against regex patterns.
 * - Provides clear error handling for invalid patterns or inputs.
 * - Logs detailed debugging information for easier development and troubleshooting.
 */
const regexMatch = (inputString, pattern) => {
  /**
   * Step 1: Input Validation
   * 
   * Why Validate Inputs?
   * - Ensures predictable behavior by rejecting invalid data types.
   * - Prevents runtime errors caused by passing invalid inputs.
   * 
   * Validation Details:
   * - Both `inputString` and `pattern` must be strings.
   * - Throws an error if either parameter is not a string.
   */
  if (typeof inputString !== 'string' || typeof pattern !== 'string') {
    throw new Error('Both inputString and pattern must be strings.');
  }

  // Log the inputs for debugging purposes
  console.log(`Testing if "${inputString}" matches the pattern "${pattern}".`);

  /**
   * Step 2: Creating the Regex Object
   * 
   * Why Use RegExp Constructor?
   * - Allows dynamic pattern creation (e.g., when the pattern is passed as a variable).
   * - Enables additional flags for customization, like case-insensitivity.
   * 
   * Example of the 'i' Flag:
   * - The 'i' flag makes the regex case-insensitive.
   * - Example: /hello/i matches "HELLO", "hello", or "Hello".
   * 
   * Example Syntax:
   * - Literal Regex: `/pattern/flags`
   * - Constructor: `new RegExp('pattern', 'flags')`
   */
  let regex;
  try {
    regex = new RegExp(pattern, 'i'); // 'i' makes the matching case-insensitive
    console.log(`Regex created successfully: /${pattern}/i`);
  } catch (error) {
    /**
     * Error Handling for Invalid Patterns:
     * - Catches syntax errors when creating the regex object.
     * - Provides meaningful error messages for debugging.
     * 
     * Example of Invalid Pattern:
     * - Pattern: "[a-z" (missing closing bracket)
     * - Error: "Invalid regular expression: missing ]"
     */
    console.error(`Invalid regex pattern: "${pattern}"`);
    throw new Error(`Invalid regex pattern: ${error.message}`);
  }

  /**
   * Step 3: Testing the Regex Pattern
   * 
   * What Does .test() Do?
   * - Checks if the regex pattern matches any part of the input string.
   * - Returns `true` for a match, `false` otherwise.
   * 
   * Why Use .test()?
   * - It’s efficient for simple yes/no checks.
   * - Does not extract matches but verifies their existence.
   */
  const isMatch = regex.test(inputString);

  // Log the result of the match for clarity
  if (isMatch) {
    console.log(`Match found: "${inputString}" matches the pattern "${pattern}".`);
  } else {
    console.log(`No match: "${inputString}" does not match the pattern "${pattern}".`);
  }

  // Return the result of the match
  return isMatch;
};

module.exports = regexMatch;

/**
 * Technical Explanation:
 * 
 * 1. **Input Validation:**
 *    - Ensures both parameters are strings to avoid errors.
 *    - Example of Invalid Input:
 *      regexMatch(123, '[0-9]'); // Throws an error: Both inputs must be strings.
 * 
 * 2. **Regex Object Creation:**
 *    - Dynamically creates a regex object using the `RegExp` constructor.
 *    - Allows flexibility for patterns passed as variables.
 *    - Example:
 *      const regex = new RegExp('^Hello', 'i'); // Matches strings starting with "Hello".
 * 
 * 3. **Regex Flags:**
 *    - 'i': Case-insensitive matching.
 *      Example: /hello/i matches "HELLO", "hello", and "Hello".
 *    - 'g': Global search. Finds all matches instead of stopping at the first.
 *    - 'm': Multiline matching. Allows `^` and `$` to work on each line.
 * 
 * 4. **The .test() Method:**
 *    - Checks if the pattern matches the input string.
 *    - Returns a boolean: true for a match, false otherwise.
 *    - Example:
 *      const regex = /world$/i;
 *      regex.test('Hello World'); // true
 *      regex.test('World Hello'); // false
 * 
 * Practical Examples:
 * 
 * 1. Matching the Start of a String:
 *    - Pattern: '^Hello'
 *    - Input: 'Hello World'
 *    - Result: true (Matches because the string starts with "Hello").
 * 
 * 2. Matching the End of a String:
 *    - Pattern: 'World$'
 *    - Input: 'Hello World'
 *    - Result: true (Matches because the string ends with "World").
 * 
 * 3. Matching Specific Characters:
 *    - Pattern: '[a-z]'
 *    - Input: '123abc'
 *    - Result: true (Matches because the string contains a lowercase letter).
 * 
 * 4. Matching Digits:
 *    - Pattern: '\\d'
 *    - Input: 'abc123'
 *    - Result: true (Matches because the string contains a digit).
 * 
 * 5. Case-Insensitive Matching:
 *    - Pattern: 'hello'
 *    - Input: 'HELLO WORLD'
 *    - Result: true (Matches because the 'i' flag ignores case).
 * 
 * Summary:
 * Regular expressions are powerful tools for text processing, validation, and pattern matching.
 * By combining anchors (`^` and `$`), character classes (`[a-zA-Z0-9]`), and flags (`i`, `g`, `m`),
 * you can handle complex text processing tasks efficiently.
 */