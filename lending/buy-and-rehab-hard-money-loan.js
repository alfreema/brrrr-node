const { payment } = require('finance');

/**
 * 
 * @param {Number} purchasePrice The amount to be borrowed to purchase a property
 * @param {Object} { ... } The loan terms
 * @param {*} repairCosts (Optional) If this is included, it's assumed that the initial loan will cover both 'buy' and 'rehab' totals
 * @returns 
 */
const simulate = (purchasePrice, { loanToValueRatio, interestRate, loanTermMonths, closingCostRate, interestOnly = true }, repairCosts = 0 ) => {
  const downPayment = purchasePrice * ((100 - loanToValueRatio) / 100);
  const loanAmount = purchasePrice - downPayment + repairCosts;
  const closingCosts = purchasePrice * (closingCostRate / 100);
  const monthlyInterestRate = interestRate / 12 / 100
  const monthlyPayment = interestOnly ? loanAmount * monthlyInterestRate : Number(payment(monthlyInterestRate, loanTermMonths, -loanAmount).toFixed(2));
  const totalRepayment = monthlyPayment * loanTermMonths;
  return {
    loanAmount,
    downPayment,
    totalRepayment,
    monthlyPayment,
    closingCosts,
    equityHoldback: 0
  };
}

/**
 * Calculate the monthly payment for an amortizing loan
 * @param {Number} loanAmount The loan amount
 * @param {Number} monthlyInterestRate The monthly interest rate
 * @param {Number} loanTermMonths The loan term in months
 * @returns {Number} The monthly payment
 */
/*
const calculateAmortizingPayment = (loanAmount, monthlyInterestRate, loanTermMonths) => {
  console.log(loanAmount, monthlyInterestRate, loanTermMonths)
  const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) / (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
  console.log('monthlyPayment=', monthlyPayment)
  return monthlyPayment
};
*/

module.exports = {
  simulate
}
