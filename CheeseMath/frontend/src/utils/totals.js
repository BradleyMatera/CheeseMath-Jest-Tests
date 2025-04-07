const obscureCreditCard = (cardNumber) => {
  if (cardNumber.length < 12 || cardNumber.length > 16) {
    return "Invalid Credit Card";
  }
  
  const lastFour = cardNumber.slice(-4);
  return "XXXX-XXXX-XXXX-" + lastFour;
};

module.exports = obscureCreditCard;