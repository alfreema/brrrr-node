// Function to simulate property purchase
const simulate = (purchasePrice, { propertyPrice, closingCostRate }) => {
  const closingCosts = purchasePrice * (closingCostRate / 100);
  return {
    downPayment: purchasePrice,
    loanAmount: 0,
    monthlyPayment: 0,
    closingCosts,
    equityHoldback: 0
  };
};

module.exports = {
  simulate
};
