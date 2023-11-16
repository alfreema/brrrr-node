// Function to calculate interest-only payment for hard money loan
function calculateInterestOnlyPayment(loanAmount, interestRate) {
  const monthlyInterestPayment = loanAmount * (interestRate / 12 / 100);
  return monthlyInterestPayment;
}

// Function to simulate property purchase with a hard money loan
const simulate = ({ propertyPrice, loanToValueRatio, interestRate, loanTermMonths, closingCostRate }) => {
  const loanAmount = propertyPrice * (loanToValueRatio / 100);
  const closingCosts = propertyPrice * (closingCostRate / 100);
  const monthlyPayment = calculateInterestOnlyPayment(loanAmount, interestRate);
  const totalRepayment = monthlyPayment * loanTermMonths;
  console.log("Property Purchase Simulation with Hard Money Loan:");
  console.log(`Property Price: $${propertyPrice}`);
  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Loan-to-Value Ratio: ${loanToValueRatio}%`);
  console.log(`Interest Rate: ${interestRate}% per annum`);
  console.log(`Loan Term: ${loanTermMonths} months`);
  console.log(`Estimated Closing Costs: $${closingCosts}`);
  console.log(`Total Repayment: $${totalRepayment.toFixed(2)}`);
  console.log(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);
  return {
    monthlyPayment,
    closingCosts
  };
}

module.exports = {
  simulate
}
