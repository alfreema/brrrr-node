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

  console.log("Property Cash Flow Simulation:");
  console.log(`Monthly Rent: $${monthlyRent}`);
  console.log(`Vacancy Costs: $${vacancyAmount}`);
  console.log(`Property Management Costs: $${propertyManagementAmount}`);
  console.log(`Carrying Costs: $${carryingCosts}`);
  console.log(`Total Monthly Cash Flow: $${netMonthlyIncome.toFixed(2)}`);

  return {
    monthlyCashFlow: netMonthlyIncome, 
    annualCashFlow: netMonthlyIncome * 12 // Convert monthly cash flow to annual
  };
}

module.exports = {
  simulate
};
