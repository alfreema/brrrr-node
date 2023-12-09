// Based on the description found here:  https://www.youtube.com/watch?v=R7efrjnC95Y

const barLoan = require('./buy-and-rehab-hard-money-loan.js')

// Function to simulate property purchase with a hard money loan
/**
 * 
 * @param {Number} purchasePrice The amount to be borrowed to purchase a property
 * @param {Object} { ... } The loan terms
 * @param {*} repairCosts (Optional) If this is included, it's assumed that the initial loan will cover both 'buy' and 'rehab' totals
 * @returns 
 */
const simulate = (purchasePrice, { loanToValueRatio, interestRate, loanTermMonths, closingCostRate, equityHoldbackLoanToValueRatio }, repairCosts, afterRepairValue ) => {
  const buyAndHoldLoan = barLoan.simulate(purchasePrice, { loanToValueRatio, interestRate, loanTermMonths, closingCostRate }, repairCosts)
  const loanAmount = afterRepairValue * (equityHoldbackLoanToValueRatio / 100);
  const equityHoldback = loanAmount - buyAndHoldLoan.loanAmount;
  const closingCosts = loanAmount * (closingCostRate / 100);
  const monthlyPayment = loanAmount * (interestRate / 12 / 100);
  const totalRepayment = monthlyPayment * loanTermMonths;
  return {
    loanAmount,
    downPayment: buyAndHoldLoan.downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts,
    equityHoldback
  };
}

module.exports = {
  simulate
}
