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
  propertyPrice: 189000, // Replace with the actual property price
  downPaymentPercentage: 20, // 20% down payment
  loanTermYears: 30, // 30-year loan term
  annualInterestRate: 7, // 4.5% annual interest rate,
  closingCostRate: 2 // 2.5% closing cost rate
}

const hardMoneyLoan = { 
  propertyPrice: 200000, // Replace with the actual property price
  loanToValueRatio: 70, // 70% loan-to-value ratio
  interestRate: 12, // 12% annual interest rate
  loanTermMonths: 12, // 12 months loan term
  closingCostRate: 3 // 3% closing cost rate
}

const cashPurchase = {
  propertyPrice: 200000, // Replace with the actual property price
  closingCostRate: 1 // 1% closing cost rate
}

const rehabParameters = {
  afterRepairValue: 290000,
  repairCosts: 100000,
  monthsToCompleteRepairs: 9
}

const rentParameters = {
  monthlyRent: 1700,                   // Example monthly rent amount
  propertyManagementRate: 7,          // Example property management rate as a percentage
  vacancyRate: 5                      // Example vacancy rate as a percentage
};

const traditionalMortgageRefinance = {
  loanToValue: 70,              // Example Loan-to-Value ratio
  refinanceCostRate: 9,         // Example Refinancing Costs
  carryDuration: 12,              // In months
  annualInterestRate: 8,        // 4.5% annual interest rate,
};


const buyResult = buy.simulate({ 
  traditionalMortgageLoan,
  propertyOwnershipRates
})

console.info("Property Purchase Simulation");
console.info(`Property Price: $${traditionalMortgageLoan.propertyPrice}`);
console.info(`Down Payment: $${buyResult.downPayment}`);
console.info(`Loan Amount: $${buyResult.loanAmount}`);
console.info(`Loan Term: ${traditionalMortgageLoan.loanTermYears} years`);
console.info(`Annual Interest Rate: ${traditionalMortgageLoan.annualInterestRate}%`);
console.info(`Estimated Closing Costs: $${buyResult.closingCosts}`);
console.info(`Monthly Mortgage Payment: $${buyResult.monthlyPayment.toFixed(2)}\n`);

console.info("Property Carrying Costs Simulation:");
console.info("Monthly Property Tax:", buyResult.carryCosts.monthlyPropertyTax.toFixed(2));
console.info("Monthly Homeowners Insurance:", buyResult.carryCosts.monthlyInsurance.toFixed(2));
console.info("Monthly Maintenance Cost:", buyResult.carryCosts.monthlyMaintenance.toFixed(2));
console.info("Total Monthly Costs:", buyResult.carryCosts.totalMonthlyCosts.toFixed(2));

console.log('\nbuyResult=', buyResult, '\n\n')


const rehabResult = rehab.simulate({ 
  ...rehabParameters,
  propertyPrice: traditionalMortgageLoan.propertyPrice
})
console.info("Property Rehab Simulation:");
console.info(`After Repair Value: $${rehabParameters.afterRepairValue}`);
console.info(`Repair Costs: $${rehabParameters.repairCosts}`);
console.info("Total Equity After Rehab:", rehabResult.equity.toFixed(2));

console.log('\nrehabResult=', rehabResult, '\n\n')

const rentResult = rent.simulate({
  ...rentParameters,
  carryingCosts: buyResult.carryCosts.totalMonthlyCosts
})
console.info("Property Rent Simulation:");
console.info(`Monthly Rent: $${rentParameters.monthlyRent}`);
console.info(`Vacancy Costs: $${rentResult.vacancyAmount}`);
console.info(`Property Management Costs: $${rentResult.propertyManagementAmount}`);
console.info(`Carrying Costs: $${buyResult.carryCosts.totalMonthlyCosts}`);
console.info(`Total Monthly Cash Flow: $${rentResult.monthlyCashFlow.toFixed(2)}`);
console.log('rentResult=', rentResult, '\n\n')

const refinanceResult = refinance.simulate({
  traditionalMortgageRefinance: {
    ...traditionalMortgageRefinance,
    afterRepairValue: rehabParameters.afterRepairValue
  },
  investment: {
    downPayment: buyResult.downPayment,
    closingCosts: buyResult.closingCosts,
    carryingCosts: buyResult.carryCosts.totalMonthlyCosts,
    rehabCosts: rehabParameters.repairCosts
  }
})
console.info("Loan and Refinance Simulation:");
console.info(`After Repair Value: $${rehabParameters.afterRepairValue}`);
console.info(`Loan-to-Value Ratio: ${traditionalMortgageRefinance.loanToValue}%`);
console.info(`Refinancing Costs Rate: ${traditionalMortgageRefinance.refinanceCostRate}%`);
console.info(`Total Investment: $${refinanceResult.totalInvestment}`);
console.info(`Loan Amount Before Refinance: $${refinanceResult.loanAmountBeforeRefi.toFixed(2)}`);
console.info(`Loan Amount After Refinance: $${refinanceResult.loanAmountAfterRefi.toFixed(2)}`);
console.info(`Cash Out Refinance: $${refinanceResult.cashOutRefinance.toFixed(2)}`);
console.log('refinanceResult=', refinanceResult, '\n\n')