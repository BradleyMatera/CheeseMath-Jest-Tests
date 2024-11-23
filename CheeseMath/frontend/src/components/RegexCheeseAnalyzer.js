import React, { useState } from 'react';
import regexMatch from '../utils/regexCheese';

const RegexCheeseAnalyzer = () => {
  const [input, setInput] = useState('');
  const [pattern, setPattern] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    try {
      if (!input) {
        setResult('Please provide a valid input string.');
        return;
      }

      switch (operation) {
        case 'match':
          if (!pattern) {
            setResult('Please provide a regex pattern to match.');
            return;
          }
          const isMatch = regexMatch(input, pattern);
          setResult(
            isMatch
              ? `"${input}" matches the pattern "${pattern}".`
              : `"${input}" does not match the pattern "${pattern}".`
          );
          break;
        case 'validate':
          const isValid = regexMatch(input, '^[a-zA-Z\\s]+$'); // Letters and spaces only
          setResult(
            isValid
              ? `"${input}" is a valid cheese name.`
              : `"${input}" is not a valid cheese name.`
          );
          break;
        default:
          setResult('Invalid regex operation.');
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="regex-analyzer-container">
      <h1>Regex Cheese Analyzer</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter input string"
      />
      <input
        type="text"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        placeholder="Enter regex pattern (for match)"
      />
      <div className="button-container">
        <button onClick={() => handleOperation('match')}>Match Pattern</button>
        <button onClick={() => handleOperation('validate')}>Validate Cheese Name</button>
      </div>
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default RegexCheeseAnalyzer;