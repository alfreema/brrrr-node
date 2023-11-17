// Function to simulate property purchase
const simulate = ({ propertyPrice, closingCostRate }) => {
  const closingCosts = propertyPrice * (closingCostRate / 100);
  const monthlyPayment = 0
  return {
    monthlyPayment,
    closingCosts
  };
};

module.exports = {
  simulate
};
