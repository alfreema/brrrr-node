const { simulate } = require('./index.js');

const strategy = {
  buy: {
    property: {
      price: 90000,
      propertyTaxRate: 1.2,
      insuranceRate: 0.6,
      maintenanceRate: 0.3
    },
    loan: {
      type: 'cashPurchase',
      closingCostRate: 2
    }
  },
  rehab: {
    afterRepairValue: 160000,
    repairCosts: 35000,
    monthsToCompleteRepairs: 4
  },
  rent: {
    monthlyRent: 2000,
    propertyManagementRate: 8,
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
