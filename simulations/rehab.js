// Function to calculate overall monthly carrying costs
function simulate({ afterRepairValue, propertyPrice, repairCosts }) {
  const equity = afterRepairValue - (propertyPrice + repairCosts);
  console.info("Property Rehab Simulation:");
  console.info(`After Repair Value: $${afterRepairValue}`);
  console.info(`Repair Costs: $${repairCosts}`);
  console.info("Total Equity After Rehab:", equity.toFixed(2));
  return {
    equity
  };
}

module.exports = {
  simulate
}
