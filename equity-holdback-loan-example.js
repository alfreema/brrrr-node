// Based on the description found here:  https://www.youtube.com/watch?v=R7efrjnC95Y

const { simulate } = require('./index.js');

const strategy = {
  buy: {
    property: {
      price: 100000,
      propertyTaxRate: 1.2,
      insuranceRate: 0.6,
      maintenanceRate: 0.3
    },
    loan: {
      type: 'equityHoldbackHardMoneyLoan',
      loanToValueRatio: 80,
      interestRate: 9,
      loanTermMonths: 12,
      closingCostRate: 2,
      equityHoldbackLoanToValueRatio: 79
    }
  },
  rehab: {
    afterRepairValue: 225000,
    repairCosts: 60000,
    monthsToCompleteRepairs: 4
  },
  rent: {
    monthlyRent: 2100,
    propertyManagementRate: 6,
    vacancyRate: 5
  },
  refinance: {
    loan: {
      type: 'debtServiceCoverageRatioLoan',
      loanToValueRatio: 79,
      interestRate: 8,
      loanTermMonths: 12*30,
      closingCostRate: 2
    }
  },
  repeat: {
  }
}

const result = simulate(strategy)
console.log(result)
