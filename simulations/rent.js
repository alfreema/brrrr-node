const percentage = require('../math/percentage.js')

// Function to calculate annual cash flow for a property
function simulate({
  monthlyRent,
  propertyManagementRate,
  vacancyRate,
  carryingCosts
}) {
  const vacancyAmount = percentage.percentageAmount(monthlyRent, vacancyRate);
  const propertyManagementAmount = percentage.percentageAmount(monthlyRent, propertyManagementRate);
  const netMonthlyIncome = monthlyRent - (vacancyAmount + propertyManagementAmount + carryingCosts);

  console.info("Property Cash Flow Simulation:");
  console.info(`Monthly Rent: $${monthlyRent}`);
  console.info(`Vacancy Costs: $${vacancyAmount}`);
  console.info(`Property Management Costs: $${propertyManagementAmount}`);
  console.info(`Carrying Costs: $${carryingCosts}`);
  console.info(`Total Monthly Cash Flow: $${netMonthlyIncome.toFixed(2)}`);

  return {
    monthlyCashFlow: netMonthlyIncome, 
    annualCashFlow: netMonthlyIncome * 12 // Convert monthly cash flow to annual
  };
}

module.exports = {
  simulate
};
