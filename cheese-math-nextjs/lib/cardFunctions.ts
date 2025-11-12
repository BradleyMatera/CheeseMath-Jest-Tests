/**
 * Credit Card Obscuring and Validation
 */

export const obscureCreditCard = (cardNumber: string): string => {
  const digitsOnly = cardNumber.replace(/\D/g, '');
  
  if (digitsOnly.length < 12 || digitsOnly.length > 16) {
    return 'Invalid Credit Card';
  }
  
  const lastFour = digitsOnly.slice(-4);
  return `XXXX-XXXX-XXXX-${lastFour}`;
};

export const validateCreditCard = (cardNumber: string): boolean => {
  const digitsOnly = cardNumber.replace(/\D/g, '');
  
  if (digitsOnly.length < 12 || digitsOnly.length > 16) {
    return false;
  }

  // Luhn Algorithm
  let sum = 0;
  let isEven = false;

  for (let i = digitsOnly.length - 1; i >= 0; i--) {
    let digit = parseInt(digitsOnly[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

export const formatCreditCard = (cardNumber: string): string => {
  const digitsOnly = cardNumber.replace(/\D/g, '');
  return digitsOnly.match(/.{1,4}/g)?.join('-') || cardNumber;
};

export const detectCardType = (cardNumber: string): string => {
  const digitsOnly = cardNumber.replace(/\D/g, '');
  
  if (/^4/.test(digitsOnly)) return 'Visa';
  if (/^5[1-5]/.test(digitsOnly)) return 'Mastercard';
  if (/^3[47]/.test(digitsOnly)) return 'American Express';
  if (/^6(?:011|5)/.test(digitsOnly)) return 'Discover';
  
  return 'Unknown';
};
