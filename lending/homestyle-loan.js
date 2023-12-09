// Function to calculate interest-only payment for hard money loan
function calculateInterestOnlyPayment(loanAmount, interestRate) {
  const monthlyInterestPayment = loanAmount * (interestRate / 12 / 100);
  return monthlyInterestPayment;
}

// Function to simulate property purchase with a hard money loan
const simulate = ({ propertyPrice, loanToValueRatio, interestRate, loanTermMonths, closingCostRate }) => {
  const loanAmount = propertyPrice * (loanToValueRatio / 100);
  const downPayment = propertyPrice - loanAmount;
  const closingCosts = propertyPrice * (closingCostRate / 100);
  const monthlyPayment = calculateInterestOnlyPayment(loanAmount, interestRate);
  const totalRepayment = monthlyPayment * loanTermMonths;
  console.info("Property Purchase Simulation with HomeStyle Loan:");
  console.info(`Property Price: $${propertyPrice}`);
  console.info(`Loan Amount: $${loanAmount}`);
  console.info(`Loan-to-Value Ratio: ${loanToValueRatio}%`);
  console.info(`Interest Rate: ${interestRate}% per annum`);
  console.info(`Loan Term: ${loanTermMonths} months`);
  console.info(`Estimated Closing Costs: $${closingCosts}`);
  console.info(`Total Repayment: $${totalRepayment.toFixed(2)}`);
  console.info(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);
  return {
    loanAmount,
    downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts
  };
}

module.exports = {
  simulate
}
