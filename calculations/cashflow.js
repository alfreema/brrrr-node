const percentage = require('../math/percentage')

/**
 * Calculates the annual cash flow of a property based on various parameters.
 *
 * @param {number} Rt - Rental income from the property.
 * @param {number} CC - Carrying costs associated with owning the property.
 * @param {number} propertyManagementFee - Property management fee as a percentage of rental income.
 * @param {number} vacancyPercentage - Vacancy percentage as a percentage of rental income.
 * @param {number} maintenancePercentage - Maintenance costs as a percentage of rental income.
 * @param {number} insurancePercentage - Insurance costs as a percentage of rental income.
 * @param {number} propertyTaxPercentage - Property tax costs as a percentage of rental income.
 */
 function calculateAnnualCashFlow(Rt, CC, propertyManagementFee, vacancyPercentage, maintenancePercentage, insurancePercentage, propertyTaxPercentage) {
  const vacancyAmount = percentage.percentageAmount(Rt, vacancyPercentage);
  const netRentalIncome = calculateNetIncome(Rt, vacancyAmount);
  const maintenanceAmount = percentage.percentageAmount(Rt, maintenancePercentage);
  const netIncomeAfterMaintenance = calculateNetIncome(netRentalIncome, maintenanceAmount);
  const insuranceAmount = percentage.percentageAmount(Rt, insurancePercentage);
  const netIncomeAfterInsurance = calculateNetIncome(netIncomeAfterMaintenance, insuranceAmount);
  const propertyTaxAmount = percentage.percentageAmount(Rt, propertyTaxPercentage);
  const netIncomeAfterPropertyTax = calculateNetIncome(netIncomeAfterInsurance, propertyTaxAmount);
  const annualCashFlow = calculateAnnualCashFlowFinal(netIncomeAfterPropertyTax, CC, propertyManagementFee);
  return annualCashFlow;
}

function calculateNetIncome(baseIncome, deductionAmount) {
  return baseIncome - deductionAmount;
}

function calculateAnnualCashFlowFinal(netIncomeAfterPropertyTax, CC, propertyManagementFee) {
  return netIncomeAfterPropertyTax - CC - (netIncomeAfterPropertyTax * (propertyManagementFee / 100));
}

module.exports = {
  calculateNetIncome,
  calculateAnnualCashFlow,
  calculateAnnualCashFlowFinal
};
