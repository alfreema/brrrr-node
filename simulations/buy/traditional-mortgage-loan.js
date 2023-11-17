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
const simulate = ({ propertyPrice, downPaymentPercentage, loanTermYears, annualInterestRate, closingCostRate }) => {
  const downPayment = propertyPrice * (downPaymentPercentage / 100);
  const loanAmount = propertyPrice - downPayment;
  const closingCosts = propertyPrice * (closingCostRate / 100);
  const monthlyPayment = calculateMonthlyPayment(loanAmount, annualInterestRate, loanTermYears);

  console.info("Property Purchase Simulation with Traditional Mortgage Loan:");
  console.info(`Property Price: $${propertyPrice}`);
  console.info(`Down Payment: $${downPayment}`);
  console.info(`Loan Amount: $${loanAmount}`);
  console.info(`Loan Term: ${loanTermYears} years`);
  console.info(`Annual Interest Rate: ${annualInterestRate}%`);
  console.info(`Estimated Closing Costs: $${closingCosts}`);
  console.info(`Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`);

  return {
    monthlyPayment,
    closingCosts
  };
};

module.exports = {
  simulate,
};
