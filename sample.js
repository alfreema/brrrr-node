const { simulate } = require('./index.js');

const strategy = {
  buy: {
    property: {
      price: 325000,
      propertyTaxRate: 1.2,
      insuranceRate: 0.6,
      maintenanceRate: 0.3
    },
    loan: {
      type: 'equityHoldbackHardMoneyLoan',
      loanToValueRatio: 80,
      interestRate: 9.35,
      loanTermMonths: 60,
      interestOnly: true,
      equityHoldbackLoanToValueRatio: 79,
      closingCostRate: 2
    }
  },
  rehab: {
    afterRepairValue: 625000,
    repairCosts: 140000,
    monthsToCompleteRepairs: 6
  },
  rent: {
    monthlyRent: 7000,
    propertyManagementRate: 7,
    vacancyRate: 5
  },
  refinance: {
    loan: {
      type: 'debtServiceCoverageRatioLoan',
      loanToValueRatio: 79,
      interestRate: 8.5,
      loanTermMonths: 12*30,
      closingCostRate: 2,
      seasoningMonths: 12
    }
  },
  repeat: {
  }
}

const result = simulate(strategy)
console.log(result)
