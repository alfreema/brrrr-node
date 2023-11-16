// Function to calculate overall monthly carrying costs
function simulate({ afterRepairValue, propertyPrice, repairCosts }) {
  const equity = afterRepairValue - (propertyPrice + repairCosts);
  console.log("Property Rehab Simulation:");
  console.log(`After Repair Value: $${afterRepairValue}`);
  console.log(`Repair Costs: $${repairCosts}`);
  console.log("Total Equity After Rehab:", equity.toFixed(2));
  return {
    equity
  };
}

module.exports = {
  simulate
}
