import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import regexMatch from '../utils/regexCheese';

const RegexCheeseAnalyzer = () => {
  const [input, setInput] = useState('');
  const [pattern, setPattern] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    anime({
      targets: '.regex-analyzer h1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 600,
    });
    anime({
      targets: '.regex-analyzer .calculator-display',
      opacity: [0, 1],
      scale: [0.95, 1],
      easing: 'easeOutQuad',
      duration: 800,
    });
    anime({
      targets: '.regex-analyzer .button-grid button',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      duration: 1000,
      delay: anime.stagger(100),
    });
    if (result) {
      anime({
        targets: '.regex-analyzer .calculator-display',
        backgroundColor: ['#fff', '#e0e0e0', '#fff'],
        easing: 'easeInOutSine',
        duration: 300,
      });
    }
  }, [result]);

  const handleOperation = (operation) => {
    try {
      if (!input) {
        setResult('ERROR');
        return;
      }
      switch (operation) {
        case 'match':
          if (!pattern) setResult('ERROR');
          else setResult(regexMatch(input, pattern) ? 'TRUE' : 'FALSE');
          break;
        case 'validate':
          setResult(regexMatch(input, '^[a-zA-Z\\s]+$') ? 'VALID' : 'INVALID');
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
    <div className="regex-analyzer component-container">
      <h1 style={{ color: '#ccc' }}>Regex Analyzer</h1>
      <div className="calculator-display">
        <input
          style={{ width: '45%', marginRight: '5%' }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Text"
        />
        <input
          style={{ width: '45%' }}
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Pattern"
        />
        {result && <span style={{ display: 'block', marginTop: '10px' }}>{result}</span>}
      </div>
      <div className="button-grid">
        <button onClick={(e) => { animateButton(e); handleOperation('match'); }}>MATCH</button>
        <button onClick={(e) => { animateButton(e); handleOperation('validate'); }}>VALIDATE</button>
      </div>
    </div>
  );
};

export default RegexCheeseAnalyzer;