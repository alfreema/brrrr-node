/**
 * Calculate loan amount before refinance.
 * @param {number} ARV - After Repair Value
 * @param {number} LTV - Loan-to-Value
 * @returns {number} Loan Amount Before Refinance
 */
function calculateLoanAmountBeforeRefi(ARV, LTV) {
  return ARV * (1 - LTV / 100);
}

/**
 * Calculate loan amount after refinance.
 * @param {number} loanAmountBeforeRefi
 * @param {number} RefiC - Refinancing Costs
 * @returns {number} Loan Amount After Refinance
 */
function calculateLoanAmountAfterRefi(loanAmountBeforeRefi, RefiC) {
  return loanAmountBeforeRefi + RefiC;
}

/**
 * Calculate cash out refinance.
 * @param {number} LAAR - Loan Amount After Refinance
 * @param {number} totalInvestment
 * @returns {number} Cash Out Refinance
 */
function calculateCashOutRefinance(LAAR, totalInvestment) {
  return Math.max(0, LAAR - totalInvestment);
}

module.exports = {
  calculateLoanAmountBeforeRefi,
  calculateLoanAmountAfterRefi,
  calculateCashOutRefinance
};
