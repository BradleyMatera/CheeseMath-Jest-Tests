const obscureCreditCard = require('../totals'); // Path adjusted to go up one level from tests/

describe('obscureCreditCard', () => {
  // Positive tests
  test('should obscure 12-digit credit card number correctly', () => {
    expect(obscureCreditCard('123456789012')).toBe('XXXX-XXXX-XXXX-9012');
  });

  test('should obscure 14-digit credit card number correctly', () => {
    expect(obscureCreditCard('12345678901234')).toBe('XXXX-XXXX-XXXX-1234');
  });

  test('should obscure 16-digit credit card number correctly', () => {
    expect(obscureCreditCard('1234567890123456')).toBe('XXXX-XXXX-XXXX-3456');
  });

  // Negative tests
  test('should return invalid for 11-digit credit card number', () => {
    expect(obscureCreditCard('12345678901')).toBe('Invalid Credit Card');
  });

  test('should return invalid for 17-digit credit card number', () => {
    expect(obscureCreditCard('12345678901234567')).toBe('Invalid Credit Card');
  });

  test('should return invalid for empty string', () => {
    expect(obscureCreditCard('')).toBe('Invalid Credit Card');
  });
});