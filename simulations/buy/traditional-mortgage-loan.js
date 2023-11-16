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

  console.log("Property Purchase Simulation:");
  console.log(`Property Price: $${propertyPrice}`);
  console.log(`Down Payment: $${downPayment}`);
  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Loan Term: ${loanTermYears} years`);
  console.log(`Annual Interest Rate: ${annualInterestRate}%`);
  console.log(`Estimated Closing Costs: $${closingCosts}`);
  console.log(`Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`);

  return {
    monthlyPayment,
    closingCosts
  };
};

module.exports = {
  simulate,
};
