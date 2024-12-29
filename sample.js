const { simulate } = require('./index.js');

const strategy = {
  buy: {
    property: {
      price: 350000,
      propertyTaxRate: 1.2,
      insuranceRate: 0.6,
      maintenanceRate: 0.3
    },
    loan: {
      type: 'equityHoldbackHardMoneyLoan',
      loanToValueRatio: 80,
      interestRate: 8.25,
      loanTermMonths: 12,
      interestOnly: true,
      equityHoldbackLoanToValueRatio: 79,
      closingCostRate: 2
    }
  },
  rehab: {
    afterRepairValue: 800000,
    repairCosts: 300000,
    monthsToCompleteRepairs: 10
  },
  rent: {
    monthlyRent: 8000,
    propertyManagementRate: 7,
    vacancyRate: 5
  },
  refinance: {
    loan: {
      type: 'debtServiceCoverageRatioLoan',
      loanToValueRatio: 79,
      interestRate: 7.5,
      loanTermMonths: 12*30,
      closingCostRate: 2,
      seasoningMonths: 12,
      interestOnly: false
    }
  },
  repeat: {
  }
}

const result = simulate(strategy)
console.log(result)
