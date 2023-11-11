/**
 * Calculate the total investment.
 * @param {number} PP - Purchase Price
 * @param {number} R - Rehabilitation Costs
 * @param {number} C - Closing Costs
 * @param {number} CC - Carrying Costs
 * @returns {number} Total Investment
 */
function calculateTotalInvestment(PP, R, C, CC) {
  return PP + R + C + CC;
}

/**
 * Calculate equity after rehab.
 * @param {number} ARV - After Repair Value
 * @param {number} totalInvestment
 * @returns {number} Equity After Rehab
 */
function calculateEquityAfterRehab(ARV, totalInvestment) {
  return ARV - totalInvestment;
}

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

/**
 * Calculate Cash-on-Cash return.
 * @param {number} annualCashFlow
 * @param {number} totalInvestment
 * @returns {number} Cash On Cash Return
 */
function calculateCashOnCashReturn(annualCashFlow, totalInvestment) {
  return ((annualCashFlow * 12) / totalInvestment) * 100;
}

module.exports = {
  calculateTotalInvestment,
  calculateEquityAfterRehab,
  calculateLoanAmountBeforeRefi,
  calculateLoanAmountAfterRefi,
  calculateCashOutRefinance,
  calculateCashOnCashReturn,
};
