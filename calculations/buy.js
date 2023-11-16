/**
 * Calculate the total investment.
 * @param {number} purchasePrice - Purchase Price
 * @param {number} rehabilitationCosts - Rehabilitation Costs
 * @param {number} closingCosts - Closing Costs
 * @param {number} carryingCosts - Carrying Costs
 * @returns {number} Total Investment
 */
 function calculateTotalInvestment(purchasePrice, rehabilitationCosts, closingCosts, carryingCosts) {
  return purchasePrice + rehabilitationCosts + closingCosts + carryingCosts;
}

module.exports = {
  calculateTotalInvestment
};
