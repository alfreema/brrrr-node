const buy = require('./simulations/buy.js');
const rehab = require('./simulations/rehab.js');

const propertyOwnershipRates = {
  propertyTaxRate: 1.2, // 1.2% property tax rate
  insuranceRate: 0.5, // 0.5% homeowners insurance rate
  maintenanceRate: 0.3 // 0.3% maintenance cost rate
};

const traditionalMortgageLoan = { 
  propertyPrice: 200000, // Replace with the actual property price
  downPaymentPercentage: 20, // 20% down payment
  loanTermYears: 30, // 30-year loan term
  annualInterestRate: 4.5, // 4.5% annual interest rate,
  closingCostRate: 2.5 // 2.5% closing cost rate
}

const hardMoneyLoan = { 
  propertyPrice: 200000, // Replace with the actual property price
  loanToValueRatio: 70, // 70% loan-to-value ratio
  interestRate: 12, // 12% annual interest rate
  loanTermMonths: 12, // 12 months loan term
  closingCostRate: 3 // 3% closing cost rate
}

let result

result = buy.simulate({ 
  traditionalMortgageLoan,
  propertyOwnershipRates
})
console.log('result=', result)
result = rehab.simulate({ 
  afterRepairValue: 240000,
  propertyPrice: traditionalMortgageLoan.propertyPrice,
  repairCosts: 25000
})
console.log('\n**********\n')

result = buy.simulate({ 
  hardMoneyLoan,
  propertyOwnershipRates
})
console.log('result=', result)
result = rehab.simulate({ 
  afterRepairValue: 240000,
  propertyPrice: hardMoneyLoan.propertyPrice,
  repairCosts: 25000
})
