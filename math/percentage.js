/**
 * Calculates a percentage of a given value.
 *
 * @param {number} baseValue - The base value.
 * @param {number} percentage - The percentage to calculate.
 * @returns {number} - The result of the percentage calculation.
 */
 function percentageAmount(baseValue, percentage) {
  return baseValue * (percentage / 100);
}

module.exports = {
  percentageAmount
};
