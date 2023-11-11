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
  calculateCashOnCashReturn
};
