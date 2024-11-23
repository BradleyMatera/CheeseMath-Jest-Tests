import React, { useState } from 'react';
import { sumOfArray, reverseString, isPalindrome } from '../utils/advancedCheeseFunctions';

// Define capitalizeWords function
const capitalizeWords = (str) => {
  if (!str) return ''; // Handle empty string
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const AdvancedCheeseCalculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  const [example, setExample] = useState('');

  const handleOperation = (operation) => {
    try {
      switch (operation) {
        case 'sumArray': {
          if (!value1.trim()) {
            setResult('Please enter a valid array of numbers (e.g., "1,2,3").');
            return;
          }
          const numArray = value1.split(',').map(Number);
          if (numArray.some(isNaN)) {
            setResult('Array contains invalid numbers. Please enter numbers separated by commas.');
          } else {
            setResult(`Sum: ${sumOfArray(numArray)}`);
          }
          setExample('Example: Input "1,2,3" -> Output "Sum: 6"');
          break;
        }
        case 'reverse': {
          if (!value1.trim()) {
            setResult('Please enter a valid string to reverse.');
          } else {
            setResult(`Reversed String: ${reverseString(value1)}`);
          }
          setExample('Example: Input "hello" -> Output "Reversed String: olleh"');
          break;
        }
        case 'palindrome': {
          if (!value1.trim()) {
            setResult('Please enter a valid string to check for palindrome.');
          } else {
            setResult(isPalindrome(value1) ? 'Yes, it is a palindrome.' : 'No, it is not a palindrome.');
          }
          setExample('Example: Input "madam" -> Output "Yes, it is a palindrome."');
          break;
        }
        case 'capitalize': {
          if (!value1.trim()) {
            setResult('Please enter a valid string to capitalize.');
          } else {
            setResult(`Capitalized Words: ${capitalizeWords(value1)}`);
          }
          setExample('Example: Input "hello world" -> Output "Capitalized Words: Hello World"');
          break;
        }
        default:
          setResult('Invalid operation.');
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="advanced-calculator-container">
      <h1>Advanced Cheese Calculator</h1>
      <p>Perform advanced operations like array sum, string reversal, palindrome check, and word capitalization.</p>
      <div className="input-container">
        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Enter first value or array (e.g., '1,2,3' or 'hello')"
        />
        <input
          type="text"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Enter second value (optional)"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation('sumArray')}>Sum Array</button>
        <button onClick={() => handleOperation('reverse')}>Reverse String</button>
        <button onClick={() => handleOperation('palindrome')}>Check Palindrome</button>
        <button onClick={() => handleOperation('capitalize')}>Capitalize Words</button>
      </div>
      <div className="output-container">
        <h2>Output</h2>
        <p className="result">{result}</p>
        {example && (
          <>
            <h3>Example</h3>
            <p>{example}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AdvancedCheeseCalculator;