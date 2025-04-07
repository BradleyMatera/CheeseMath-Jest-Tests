import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import obscureCreditCard from '../utils/totals';

const CreditCardObscurer = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    anime({
      targets: '.card-obscurer h1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 600,
    });
    anime({
      targets: '.card-obscurer .calculator-display',
      opacity: [0, 1],
      scale: [0.95, 1],
      easing: 'easeOutQuad',
      duration: 800,
    });
    anime({
      targets: '.card-obscurer .button-grid button',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      duration: 1000,
    });
    if (result) {
      anime({
        targets: '.card-obscurer .calculator-display',
        backgroundColor: ['#fff', '#e0e0e0', '#fff'],
        easing: 'easeInOutSine',
        duration: 300,
      });
    }
  }, [result]);

  const handleObscure = () => {
    try {
      if (!cardNumber) setResult('ERROR');
      else setResult(obscureCreditCard(cardNumber));
    } catch (error) {
      setResult(`ERR: ${error.message}`);
    }
  };

  const animateButton = (e) => {
    anime({
      targets: e.target,
      scale: [1, 0.9, 1],
      backgroundColor: ['#d32f2f', '#f57c00', '#d32f2f'],
      easing: 'easeInOutQuad',
      duration: 200,
    });
  };

  return (
    <div className="card-obscurer component-container">
      <h1 style={{ color: '#ccc' }}>Card Obscurer</h1>
      <div className="calculator-display">
        <input
          style={{ width: '100%' }}
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="0000-0000-0000-0000"
        />
        {result && <span style={{ display: 'block', marginTop: '10px' }}>{result}</span>}
      </div>
      <div className="button-grid">
        <button
          className="accent"
          onClick={(e) => { animateButton(e); handleObscure(); }}
        >
          OBSCURE
        </button>
      </div>
    </div>
  );
};

export default CreditCardObscurer;