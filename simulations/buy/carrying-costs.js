// Function to calculate overall monthly carrying costs
function simulate({ 
  propertyPrice, 
  monthlyLoanPayment, 
  propertyTaxRate, 
  insuranceRate, 
  maintenanceRate 
}) {
  const monthlyPropertyTax = propertyPrice * (propertyTaxRate / 12 / 100);
  const monthlyInsurance = propertyPrice * (insuranceRate / 12 / 100);
  const monthlyMaintenance = propertyPrice * (maintenanceRate / 12 / 100);
  const totalMonthlyCosts = monthlyLoanPayment + monthlyPropertyTax + monthlyInsurance + monthlyMaintenance;
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
