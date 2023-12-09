// Function to calculate overall monthly carrying costs
function simulate(value, {
  buy: {
    property: {
      propertyTaxRate, 
      insuranceRate, 
      maintenanceRate 
    }
  },
  monthlyLoanPayment, 
}) {
  const monthlyPropertyTax = value * (propertyTaxRate / 12 / 100);
  const monthlyInsurance = value * (insuranceRate / 12 / 100);
  const monthlyMaintenance = value * (maintenanceRate / 12 / 100);
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
