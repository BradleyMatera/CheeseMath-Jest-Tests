/**
 * Regex Pattern Matching and Validation
 */

export const regexMatch = (inputString: string, pattern: string): boolean => {
  if (typeof inputString !== 'string' || typeof pattern !== 'string') {
    throw new Error('Both inputString and pattern must be strings.');
  }

  try {
    const regex = new RegExp(pattern, 'i');
    return regex.test(inputString);
  } catch (error) {
    throw new Error(`Invalid regex pattern: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phonePattern = /^\+?[\d\s\-()]+$/;
  return phonePattern.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const extractNumbers = (str: string): number[] => {
  const matches = str.match(/\d+/g);
  return matches ? matches.map(Number) : [];
};

export const extractEmails = (str: string): string[] => {
  const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/g;
  return str.match(emailPattern) || [];
};
