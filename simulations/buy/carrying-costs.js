// Function to calculate overall monthly carrying costs
function simulate({ propertyPrice, monthlyLoanPayment, propertyTaxRate, insuranceRate, maintenanceRate }) {
  const monthlyPropertyTax = propertyPrice * (propertyTaxRate / 12 / 100);
  const monthlyInsurance = propertyPrice * (insuranceRate / 12 / 100);
  const monthlyMaintenance = propertyPrice * (maintenanceRate / 12 / 100);
  const totalMonthlyCosts = monthlyLoanPayment + monthlyPropertyTax + monthlyInsurance + monthlyMaintenance;
  console.log("Property Carrying Costs Simulation:");
  console.log("Monthly Mortgage Payment:", monthlyLoanPayment.toFixed(2));
  console.log("Monthly Property Tax:", monthlyPropertyTax.toFixed(2));
  console.log("Monthly Homeowners Insurance:", monthlyInsurance.toFixed(2));
  console.log("Monthly Maintenance Cost:", monthlyMaintenance.toFixed(2));
  console.log("Total Monthly Costs:", totalMonthlyCosts.toFixed(2));
  return {
    monthlyLoanPayment,
    monthlyPropertyTax,
    monthlyInsurance,
    monthlyMaintenance,
    totalMonthlyCosts
  };
}

module.exports = {
  simulate
}
