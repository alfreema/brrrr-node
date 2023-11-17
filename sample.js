const buy = require('./simulations/buy.js');
const rehab = require('./simulations/rehab.js');
const rent = require('./simulations/rent.js');
const refinance = require('./simulations/refinance.js');

const propertyOwnershipRates = {
  propertyTaxRate: 1.2, // 1.2% property tax rate
  insuranceRate: 0.5, // 0.5% homeowners insurance rate
  maintenanceRate: 0.3 // 0.3% maintenance cost rate
};

const traditionalMortgageLoan = { 
  propertyPrice: 160000, // Replace with the actual property price
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

const rehabParameters = {
  afterRepairValue: 280000,
  repairCosts: 25000
}

const cashflowParameters = {
  monthlyRent: 1100,                   // Example monthly rent amount
  propertyManagementRate: 8,          // Example property management rate as a percentage
  vacancyRate: 5                      // Example vacancy rate as a percentage
};

const traditionalMortgageRefinance = {
  loanToValue: 70,              // Example Loan-to-Value ratio
  refinanceCostRate: 3,         // Example Refinancing Costs
  carryDuration: 6              // In months
};

const buyResult = buy.simulate({ 
  traditionalMortgageLoan,
  propertyOwnershipRates
})
console.log('buyResult=', buyResult, '\n\n')

const rehabResult = rehab.simulate({ 
  ...rehabParameters,
  propertyPrice: traditionalMortgageLoan.propertyPrice
})
console.log('rehabResult=', rehabResult, '\n\n')

const rentResult = rent.simulate({
  ...cashflowParameters,
  carryingCosts: buyResult.carryCosts.totalMonthlyCosts
})
console.log('rentResult=', rentResult, '\n\n')

const refinanceResult = refinance.simulate({
  traditionalMortgageRefinance: {
    ...traditionalMortgageRefinance,
    afterRepairValue: rehabParameters.afterRepairValue
  },
  investment: {
    propertyPrice: traditionalMortgageLoan.propertyPrice,
    closingCosts: buyResult.closingCosts,
    carryingCosts: buyResult.carryCosts.totalMonthlyCosts,
    rehabCosts: rehabParameters.repairCosts
  }
})
console.log('refinanceResult=', refinanceResult, '\n\n')