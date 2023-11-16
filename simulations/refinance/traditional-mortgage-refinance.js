/**
 * Calculate loan amount before refinance.
 * @param {number} ARV - After Repair Value
 * @param {number} LTV - Loan-to-Value
 * @returns {number} Loan Amount Before Refinance
 */
 function calculateLoanAmountBeforeRefi(ARV, LTV) {
  return ARV * (LTV / 100);
}

/**
 * Calculate loan amount after refinance.
 * @param {number} loanAmountBeforeRefi
 * @param {number} refinanceCostRate - Refinancing Costs as a percentage
 * @returns {number} Loan Amount After Refinance
 */
function calculateLoanAmountAfterRefi(loanAmountBeforeRefi, refinanceCostRate) {
  const refinanceCosts = loanAmountBeforeRefi * (refinanceCostRate / 100);
  return loanAmountBeforeRefi + refinanceCosts;
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
 * Simulate the loan and refinance calculations.
 * @param {object} params - Simulation parameters
 * @returns {object} Simulation result
 */
function simulate({ afterRepairValue, loanToValue, refinanceCostRate, carryDuration }, { propertyPrice, closingCosts, carryingCosts, rehabCosts }) {
  const totalInvestment = propertyPrice + closingCosts + (carryingCosts * carryDuration) + rehabCosts;

  const loanAmountBeforeRefi = calculateLoanAmountBeforeRefi(afterRepairValue, loanToValue);
  const loanAmountAfterRefi = calculateLoanAmountAfterRefi(loanAmountBeforeRefi, refinanceCostRate);
  const cashOutRefinance = calculateCashOutRefinance(loanAmountAfterRefi, totalInvestment);

  console.log("Loan and Refinance Simulation:");
  console.log(`After Repair Value: $${afterRepairValue}`);
  console.log(`Loan-to-Value Ratio: ${loanToValue}%`);
  console.log(`Refinancing Costs Rate: ${refinanceCostRate}%`);
  console.log(`Total Investment: $${totalInvestment}`);
  console.log(`Loan Amount Before Refinance: $${loanAmountBeforeRefi.toFixed(2)}`);
  console.log(`Loan Amount After Refinance: $${loanAmountAfterRefi.toFixed(2)}`);
  console.log(`Cash Out Refinance: $${cashOutRefinance.toFixed(2)}`);

  return {
    loanAmountBeforeRefi,
    loanAmountAfterRefi,
    cashOutRefinance
  };
}

module.exports = {
  simulate
};