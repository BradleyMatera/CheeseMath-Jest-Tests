import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import { addCheese, subtractCheese, multiplyCheese, divideCheese, cheeseSqrt, maxCheese } from '../utils/cheeseMath';

const CheeseCalculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    anime({
      targets: '.cheese-calc h1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 600,
    });
    anime({
      targets: '.cheese-calc .calculator-display',
      opacity: [0, 1],
      scale: [0.95, 1],
      easing: 'easeOutQuad',
      duration: 800,
    });
    anime({
      targets: '.cheese-calc .button-grid button',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      duration: 1000,
      delay: anime.stagger(100),
    });
    if (result !== null) {
      anime({
        targets: '.cheese-calc .calculator-display',
        backgroundColor: ['#fff', '#e0e0e0', '#fff'],
        easing: 'easeInOutSine',
        duration: 300,
      });
    }
  }, [result]);

  const handleOperation = (operation) => {
    try {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(value2);
      if (isNaN(num1) || (operation !== 'sqrt' && isNaN(num2))) {
        setResult('ERROR');
        return;
      }
      let operationResult;
      switch (operation) {
        case 'add': operationResult = addCheese(num1, num2); break;
        case 'subtract': operationResult = subtractCheese(num1, num2); break;
        case 'multiply': operationResult = multiplyCheese(num1, num2); break;
        case 'divide': operationResult = divideCheese(num1, num2); break;
        case 'sqrt': operationResult = cheeseSqrt(num1); break;
        case 'max': operationResult = maxCheese(num1, num2); break;
        default: operationResult = 'ERROR';
      }
      setResult(operationResult);
    } catch (error) {
      setResult(`ERR: ${error.message}`);
    }
  };

  const animateButton = (e) => {
    anime({
      targets: e.target,
      scale: [1, 0.9, 1],
      backgroundColor: ['#666', '#999', '#666'],
      easing: 'easeInOutQuad',
      duration: 200,
    });
  };

  return (
    <div className="cheese-calc component-container">
      <h1 style={{ color: '#ccc' }}>Basic Calc</h1>
      <div className="calculator-display">
        <input
          style={{ width: '45%', marginRight: '5%' }}
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="0"
        />
        <input
          style={{ width: '45%' }}
          type="text"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="0"
        />
        {result !== null && <span style={{ display: 'block', marginTop: '10px' }}>{result}</span>}
      </div>
      <div className="button-grid">
        {['add', 'subtract', 'multiply', 'divide', 'sqrt', 'max'].map((op) => (
          <button
            key={op}
            onClick={(e) => { animateButton(e); handleOperation(op); }}
          >
            {op === 'add' ? '+' : op === 'subtract' ? '-' : op === 'multiply' ? '×' : op === 'divide' ? '÷' : op === 'sqrt' ? '√' : 'MAX'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheeseCalculator;