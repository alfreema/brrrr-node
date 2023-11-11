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

module.exports = {
  calculateTotalInvestment
};
