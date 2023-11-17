// Function to calculate monthly mortgage payment
function calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermYears) {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalPayments = loanTermYears * 12;
  const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
  const monthlyPayment = loanAmount / discountFactor;
  return monthlyPayment;
}

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
