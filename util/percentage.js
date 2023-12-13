/**
 * Calculates the percentage amount of a given base value.
 *
 * @param {number} baseValue - The base value to calculate the percentage from.
 * @param {number} percentage - The percentage to apply to the base value.
 * @returns {number} The calculated percentage amount.
 * @notes
 * - The function multiplies the base value by the specified percentage to calculate the percentage amount.
 * - Use this function to compute percentage amounts in various scenarios.
 * - The `percentage` parameter should be in numeric form (e.g., 20 for 20%).
 */function percentageAmount(baseValue, percentage) {
  return baseValue * (percentage / 100);
}

module.exports = {
  percentageAmount
};
