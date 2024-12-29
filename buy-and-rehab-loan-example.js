const { simulate } = require('./index.js');

const strategy = {
  buy: {
    property: {
      price: 250000,
      propertyTaxRate: 1.2,
      insuranceRate: 0.6,
      maintenanceRate: 0.3
    },
    loan: {
      type: 'buyAndRehabHardMoneyLoan',
      loanToValueRatio: 80,
      interestRate: 9,
      loanTermMonths: 12,
      closingCostRate: 2
    }
  },
  rehab: {
    afterRepairValue: 337500,
    repairCosts: 31250,
    monthsToCompleteRepairs: 5
  },
  rent: {
    monthlyRent: 2500,
    propertyManagementRate: 6,
    vacancyRate: 5
  },
  refinance: {
    loan: {
      type: 'debtServiceCoverageRatioLoan',
      loanToValueRatio: 75,
      interestRate: 6.82,
      loanTermMonths: 12*30,
      closingCostRate: 1.11111,
      interestOnly: false,
      seasoningMonths: 0
    }
  },
  repeat: {
  }
}

const result = simulate(strategy)
console.log(result)
