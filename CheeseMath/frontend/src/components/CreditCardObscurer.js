import React, { useState } from 'react';
import obscureCreditCard from '../utils/totals';

const CreditCardObscurer = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleObscure = () => {
    try {
      if (!cardNumber) {
        setResult('Please enter a credit card number.');
        return;
      }
      
      const obscured = obscureCreditCard(cardNumber);
      setResult(obscured);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="credit-card-obscurer-container">
      <h1>Credit Card Obscurer</h1>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Enter credit card number"
      />
      <div className="button-container">
        <button onClick={handleObscure}>Obscure Card</button>
      </div>
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default CreditCardObscurer;