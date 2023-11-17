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
  return {
    vacancyAmount,
    propertyManagementAmount,
    monthlyCashFlow: netMonthlyIncome, 
    annualCashFlow: netMonthlyIncome * 12 // Convert monthly cash flow to annual
  };
}

module.exports = {
  simulate
};
