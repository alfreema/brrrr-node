// Function to simulate property purchase with a hard money loan
/**
 * 
 * @param {Number} purchasePrice The amount to be borrowed to purchase a property
 * @param {Object} { ... } The loan terms
 * @param {*} repairCosts (Optional) If this is included, it's assumed that the initial loan will cover both 'buy' and 'rehab' totals
 * @returns 
 */
const simulate = (purchasePrice, { loanToValueRatio, interestRate, loanTermMonths, closingCostRate }, repairCosts = null ) => {
  if(repairCosts) {
    purchasePrice += repairCosts
  }
  const loanAmount = purchasePrice * (loanToValueRatio / 100);
  const downPayment = purchasePrice - loanAmount;
  const closingCosts = purchasePrice * (closingCostRate / 100);
  const monthlyPayment = loanAmount * (interestRate / 12 / 100);
  const totalRepayment = monthlyPayment * loanTermMonths;
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
