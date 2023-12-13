const { verifyProperties } = require('../util/validate.js')

const simulate = (strategy, propertyValue, monthlyLoanPayment = 0) => {
  validate(strategy)
  const {
    buy: {
      property: {
        propertyTaxRate,
        insuranceRate,
        maintenanceRate
      }
    }
  } = strategy;
  const monthlyPropertyTax = propertyValue * (propertyTaxRate / 12 / 100);
  const monthlyInsurance = propertyValue * (insuranceRate / 12 / 100);
  const monthlyMaintenance = propertyValue * (maintenanceRate / 12 / 100);
  const totalMonthlyCosts = monthlyLoanPayment + monthlyPropertyTax + monthlyInsurance + monthlyMaintenance;
  return {
    monthlyLoanPayment,
    monthlyPropertyTax,
    monthlyInsurance,
    monthlyMaintenance,
    totalMonthlyCosts
  };
}

const validate = strategy => {
  if(!verifyProperties(strategy, [
    'buy.property.propertyTaxRate',
    'buy.property.insuranceRate',
    'buy.property.maintenanceRate'
  ])) {
    const error = '"Missing property!'
    console.error(error)
    throw new Error(error)
  }
}

module.exports = {
  simulate
}
