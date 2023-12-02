// Function to calculate overall monthly carrying costs
function simulate({ afterRepairValue, propertyPrice, repairCosts, monthsToCompleteRepairs }) {
  const equity = afterRepairValue - (propertyPrice + repairCosts);
  return {
    equity,
    monthsToCompleteRepairs
  };
}

module.exports = {
  simulate
}
