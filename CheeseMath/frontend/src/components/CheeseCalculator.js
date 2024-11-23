import React, { useState } from 'react';
import {
  addCheese,
  subtractCheese,
  multiplyCheese,
  divideCheese,
  cheeseSqrt,
  maxCheese,
} from '../utils/cheeseMath';

const CheeseCalculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    try {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(value2);

      if (isNaN(num1) || (operation !== 'sqrt' && isNaN(num2))) {
        setResult('Please enter valid numeric values.');
        return;
      }

      let operationResult;
      switch (operation) {
        case 'add':
          operationResult = addCheese(num1, num2);
          break;
        case 'subtract':
          operationResult = subtractCheese(num1, num2);
          break;
        case 'multiply':
          operationResult = multiplyCheese(num1, num2);
          break;
        case 'divide':
          operationResult = divideCheese(num1, num2);
          break;
        case 'sqrt':
          operationResult = cheeseSqrt(num1);
          break;
        case 'max':
          operationResult = maxCheese(num1, num2);
          break;
        default:
          operationResult = 'Invalid operation.';
      }

      setResult(operationResult);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Cheese Calculator</h1>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        placeholder="Enter first value"
      />
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        placeholder="Enter second value"
      />
      <div className="button-container">
        <button onClick={() => handleOperation('add')}>Add</button>
        <button onClick={() => handleOperation('subtract')}>Subtract</button>
        <button onClick={() => handleOperation('multiply')}>Multiply</button>
        <button onClick={() => handleOperation('divide')}>Divide</button>
        <button onClick={() => handleOperation('sqrt')}>Square Root</button>
        <button onClick={() => handleOperation('max')}>Max</button>
      </div>
      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default CheeseCalculator;