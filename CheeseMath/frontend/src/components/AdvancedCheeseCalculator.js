import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import { sumOfArray, reverseString, isPalindrome } from '../utils/advancedCheeseFunctions';

const capitalizeWords = (str) => (str ? str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ') : '');

const AdvancedCheeseCalculator = () => {
  const [value1, setValue1] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    anime({
      targets: '.adv-calc h1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 600,
    });
    anime({
      targets: '.adv-calc .calculator-display',
      opacity: [0, 1],
      scale: [0.95, 1],
      easing: 'easeOutQuad',
      duration: 800,
    });
    anime({
      targets: '.adv-calc .button-grid button',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      duration: 1000,
      delay: anime.stagger(100),
    });
    if (result) {
      anime({
        targets: '.adv-calc .calculator-display',
        backgroundColor: ['#fff', '#e0e0e0', '#fff'],
        easing: 'easeInOutSine',
        duration: 300,
      });
    }
  }, [result]);

  const handleOperation = (operation) => {
    try {
      switch (operation) {
        case 'sumArray':
          if (!value1.trim()) setResult('ERROR');
          else {
            const numArray = value1.split(',').map(Number);
            setResult(numArray.some(isNaN) ? 'ERROR' : sumOfArray(numArray));
          }
          break;
        case 'reverse':
          setResult(value1.trim() ? reverseString(value1) : 'ERROR');
          break;
        case 'palindrome':
          setResult(value1.trim() ? (isPalindrome(value1) ? 'TRUE' : 'FALSE') : 'ERROR');
          break;
        case 'capitalize':
          setResult(value1.trim() ? capitalizeWords(value1) : 'ERROR');
          break;
        default:
          setResult('ERROR');
      }
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
    <div className="adv-calc component-container">
      <h1 style={{ color: '#ccc' }}>Advanced Calc</h1>
      <div className="calculator-display">
        <input
          style={{ width: '100%' }}
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="0"
        />
        {result && <span style={{ display: 'block', marginTop: '10px' }}>{result}</span>}
      </div>
      <div className="button-grid">
        {['sumArray', 'reverse', 'palindrome', 'capitalize'].map((op) => (
          <button
            key={op}
            onClick={(e) => { animateButton(e); handleOperation(op); }}
          >
            {op.toUpperCase().replace('ARRAY', '∑')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdvancedCheeseCalculator;