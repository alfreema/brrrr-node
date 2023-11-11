/**
 * Calculate equity after rehab.
 * @param {number} ARV - After Repair Value
 * @param {number} totalInvestment
 * @returns {number} Equity After Rehab
 */
function calculateEquityAfterRehab(ARV, totalInvestment) {
  return ARV - totalInvestment;
}

module.exports = {
  calculateEquityAfterRehab
};
