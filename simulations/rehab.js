// Function to calculate overall monthly carrying costs
function simulate({ afterRepairValue, propertyPrice, repairCosts }) {
  const equity = afterRepairValue - (propertyPrice + repairCosts);
  return {
    equity
  };
}

module.exports = {
  simulate
}
